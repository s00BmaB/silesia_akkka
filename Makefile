# Zmienne
VENV = venv
PYTHON = $(VENV)/bin/python
PIP = $(VENV)/bin/pip
NPM = npm

.PHONY: setup run clean

# Instalacja wszystkiego
setup:
	python3 -m venv $(VENV)
	$(PIP) install --upgrade pip
	$(PIP) install -r requirements.txt
	cd frontend && $(NPM) install

# Uruchomienie w tmux
run:
	@# Tworzy nową sesję tmux o nazwie 'dev' (jeśli nie istnieje)
	@tmux new-session -d -s dev -n 'fullstack'
	
	@# W pierwszym oknie/panelu odpala Django
	@tmux send-keys -t dev:0 "source $(VENV)/bin/activate && cd backend && python3 manage.py runserver" C-m
	
	@# Dzieli okno pionowo i odpala Reacta
	@tmux split-window -h -t dev:0
	@tmux send-keys -t dev:0.1 "cd frontend && $(NPM) run dev" C-m
	
	@# Dołącza do sesji
	@tmux attach-session -t dev

# Czyszczenie śmieci
clean:
	rm -rf $(VENV)
	rm -rf frontend/node_modules
	find . -type d -name "__pycache__" -exec rm -rf {} +