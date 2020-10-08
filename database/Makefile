.PHONY: build publish

build:
	docker build --rm -t mariadb-devdrop .

publish: build
	docker tag mariadb-devdrop victormanduca/mariadb-devdrop:0.0.1
	docker push victormanduca/mariadb-devdrop:0.0.1
