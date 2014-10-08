// the following assumes jQuery has been loaded as tadljq

function check_trailer() {
	var unapi_id = tadljq('abbr.unapi-id').attr("title")
	var unapi_matches = unapi_id.match(/^tag:.*:biblio-record_entry\/(.*)$/);
	var record_id = unapi_matches[1];

	tadljq.ajax("https://trailer-tank.herokuapp.com/main/get_trailer.json?id=" + record_id,
		{
			success: function(data) {

			var youtube_id = data.message;

			if (youtube_id && youtube_id != 'error') {
				tadljq("<iframe />", {
					src: "https://www.youtube.com/embed/" + youtube_id + "?iv_load_policy=3&modestbranding=1&rel=0",
				}
				).height("270px").width("480px").insertAfter(tadljq('#rdetail_summary_header'));
			}

		}
	});
}

tadljq.ready(check_trailer());
