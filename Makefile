.PHONY: compile

compile:
	@echo "Compiling..."
	@deno compile -A ./src/server.ts --target aarch64-apple-darwin -o ./bin/server-aarch64_apple_darwin
	@deno compile -A ./src/server.ts --target x86_64-apple-darwin -o ./bin/server-x86_64_apple_darwin
	@deno compile -A ./src/server.ts --target x86_64-unknown-linux-gnu -o ./bin/server-x86_64_unknown_linux_gnu
	@echo "Done."