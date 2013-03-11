install:
	cp -a templates_tadlskin /openils/var
	mkdir -p /openils/var/web/css/skin/tadl/opac/
	cp -a css/* /openils/var/web/css/skin/tadl/opac/
	mkdir -p /openils/var/web/images/tadl
	cp -a images/* /openils/var/web/images/tadl/
	chown -R opensrf:opensrf /openils/var/templates_tadlskin
	chown -R opensrf:opensrf /openils/var/web/css/skin/tadl
	chown -R opensrf:opensrf /openils/var/web/images/tadl

diff:
	diff -urq templates_tadlskin /openils/var/templates_tadlskin
	diff -urq css /openils/var/web/css/skin/tadl/opac
	diff -urq images /openils/var/web/images/tadl
