# Local Webhook Receiver

This is a simple web server that receives requests and prints the body to the console.

## Pre-requisites

- [Deno](https://deno.land/#installation), for running the server
- [ngrok](https://ngrok.com/download), for exposing local server to the internet

## Usage

Run the server with `deno run`

```bash
$ deno run -A ./bin/server.ts
```

or run it by `deno task`

```bash
$ deno task start
```

## Customisation

You can change the port by setting the `PORT` environment variable.

```bash
$ PORT=8080 deno run --allow-net server.ts
```

or create a `.env` file with the following content:

```bash
PORT=8080
```

## Run with excutable file

compile the server with `deno compile`

```bash
$ make compile
```

You can run the server with the excutable file inside `bin` folder.

```bash
$ ./bin/server-{os_arch}
# e.g. For macOS with Apple Silicon
$ ./bin/server-aarch64_apple_darwin
```
