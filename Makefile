.DEFAULT_GOAL := initProject
CWD := $(shell pwd)
NETWORK := $(shell basename `pwd`)_default

initProject: db back front docker

db:
	@sudo chmod +x ./initdb.sh && ./initdb.sh

back:
	@cd ./backend && yarn

front:
	@cd ./frontend && yarn

docker:
	@docker-compose up -d

docker-reset:
	@docker-compose down
	@docker volume prune -f
	@docker-compose build
	@echo 'Project has been reset'

docker-stop:
	@docker-compose down
