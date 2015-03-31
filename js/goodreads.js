// the following assumes jQuery has been loaded as tadljq

function check_goodreads() {
    var isbns = [];

    tadljq('span.rdetail_value[itemprop="isbn"]').each(function() {
        isbns.push(tadljq(this).text().split(" ")[0]);
    });

    isbn_search = isbns.join(',');

    tadljq.ajax("https://reviewcatcher.herokuapp.com/?isbn=" + isbn_search,
        {
            success: function(data) {

            var stars_html = data.stars_html;
            var rounded = parseInt(data.rounded);

            if (stars_html && stars_html != '') {
                tadljq("<div>", {
                    id: 'goodreads_star_div',
                    html: '<a href="' + data.gr_link + '">' + stars_html + ' (' + data.raw + ') stars on Goodreads</a>'
                }
                ).insertBefore(tadljq('#rdetail_summary_from_rec'));
            }

        }
    });
}

tadljq.ready(check_goodreads());
