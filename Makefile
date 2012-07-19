install:
	cp -a templates_tadlskin /openils/var
	mkdir -p /openils/var/web/css/skin/tadl/opac/
	cp -a css/* /openils/var/web/css/skin/tadl/opac/
