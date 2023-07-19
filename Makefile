.PHONY: compile compile_all_platforms

compile_all_platforms:
	@echo "Compiling..."
	@deno compile --allow-net --allow-env --allow-read --allow-sys ./src/server.ts --target aarch64-apple-darwin -o ./bin/server-aarch64_apple_darwin
	@deno compile --allow-net --allow-env --allow-read --allow-sys ./src/server.ts --target x86_64-apple-darwin -o ./bin/server-x86_64_apple_darwin
	@deno compile --allow-net --allow-env --allow-read --allow-sys ./src/server.ts --target x86_64-unknown-linux-gnu -o ./bin/server-x86_64_unknown_linux_gnu
	@echo "Done."

compile:
	@echo "Compiling..."
	@deno compile --allow-net --allow-env --allow-read --allow-sys ./src/server.ts -o ./bin/server
	@echo "Done."