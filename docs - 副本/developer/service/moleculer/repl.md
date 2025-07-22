
# REPL Console

REPL is an interactive developer console for Steedos.

## Usage

**Switch broker to REPL mode**

```bash
yarn moleculer-runner --repl
```

## REPL Commands

```
Commands:
  actions [options]                                          List of actions
  bench [options] <action> [jsonParams] [meta]               Benchmark service action
  broadcast <eventName>                                      Broadcast an event
  broadcastLocal <eventName>                                 Broadcast an event locally
  cache                                                      Manage cache
  call [options] <actionName> [jsonParams] [meta]            Call an action
  dcall [options] <nodeID> <actionName> [jsonParams] [meta]  Direct call an action
  clear [pattern]                                            Clear cache entries
  cls                                                        Clear console
  destroy <serviceName>                                      Destroy a local service
  emit <eventName>                                           Emit an event
  env                                                        List of environment variables
  events [options]                                           List of event listeners
  info                                                       Information about broker
  listener                                                   Adds or removes event listeners
  load <servicePath>                                         Load a service from file
  loadFolder <serviceFolder> [fileMask]                      Load all services from folder
  metrics [options]                                          List metrics
  nodes [options]                                            List of nodes
  exit|q                                                     Exit application
  services [options]                                         List of services
  help [command]                                             display help for command
```

### List nodes
```bash
mol $ nodes
```

**Options**
```
    -a, --all             list all (offline) nodes
    -d, --details         detailed list
    -f, --filter <match>  filter nodes (e.g.: 'node-*')
    --raw                 print service registry to JSON
    --save [filename]     save service registry to a JSON file
```

**Output**
![image](/img/service/repl/nodes.png)

**Detailed output**
![image](/img/service/repl/nodes-detailed.png)

### List services
```bash
mol $ services
```

**Options**
```
    -a, --all             list all (offline) services
    -d, --details         print endpoints
    -f, --filter <match>  filter services (e.g.: 'user*')
    -i, --skipinternal    skip internal services
    -l, --local           only local services
```

**Output**

![image](/img/service/repl/services.png)

**Detailed output**

![image](/img/service/repl/services-detailed.png)

### List actions
```bash
mol $ actions
```

**Options**
```
    -a, --all             list all (offline) actions
    -d, --details         print endpoints
    -f, --filter <match>  filter actions (e.g.: 'users.*')
    -i, --skipinternal    skip internal actions
    -l, --local           only local actions
```

**Output**

![image](/img/service/repl/actions.png)

**Detailed output**

![image](/img/service/repl/actions-detailed.png)

### List events
```bash
mol $ events
```

**Options**
```
    -a, --all             list all (offline) event listeners
    -d, --details         print endpoints
    -f, --filter <match>  filter event listeners (e.g.: 'user.*')
    -i, --skipinternal    skip internal event listeners
    -l, --local           only local event listeners
```

**Output**

![image](/img/service/repl/events.png)

**Detailed output**

![image](/img/service/repl/events-detailed.png)


### Show common information
```bash
mol $ info
```

**Output**

![image](https://cloud.githubusercontent.com/assets/306521/26260974/aaea9b02-3ccf-11e7-9e1c-ec9150518791.png)

### List environment variables
```bash
mol $ env
```

### Call an action
```bash
mol $ call "test.hello"
```

**Output**

![image](/img/service/repl/call1.png)

**Options**
```
    --help               output usage information
    --load [filename]    Load params from file
    --stream [filename]  Send a file as stream
    --save [filename]    Save response to file
```

#### Call an action with parameters
```bash
mol $ call "math.add" --a 5 --b Bob --c --no-d --e.f "hello"
```
Params will be `{ a: 5, b: 'Bob', c: true, d: false, e: { f: 'hello' } }`

#### Call an action with params, meta & options
```bash
mol $ call "math.add" --a 5 --#b Bob --$timeout 1
```
Params will be `{ a: 5 }`, meta will be `{ b: 'Bob' }` and options will be `{ timeout: 1 }`.

#### Call with JSON string parameter
```bash
mol $ call "math.add" '{"a": 5, "b": "Bob", "c": true, "d": false, "e": { "f": "hello" } }'
```
Params will be `{ a: 5, b: 'Bob', c: true, d: false, e: { f: 'hello' } }`

#### Call with parameters from file
```bash
mol $ call "math.add" --load
```
It tries to load the `<current_dir>/math.add.params.json` file to params.

```bash
mol $ call "math.add" --load my-params.json
```
It tries to load the `my-params.jon` file to params.

#### Call with file stream
```bash
mol $ call "math.add" --stream my-picture.jpg
```
It loads the `my-picture.png` file and send to the `math.add` action as a `Stream`.

#### Call and save response to file
```bash
mol $ call "math.add" --save
```
It saved the response to the `<current_dir>/posts.find.response.json` file. The extension is `.json` when the response is `object`. Otherwise it is `.txt`.

```bash
mol $ call "math.add" --save my-response.json
```
It saved the response to the `my-response.json` file.

### Direct call
Get health info from `node-12` node
```bash
mol $ dcall "node-12" "$node.health"
```
>Parameter passing is similar to `call` command.

### Emit an event
```bash
mol $ emit "user.created"
```

#### Emit an event with parameters
```bash
mol $ emit "user.created" --a 5 --b Bob --c --no-d --e.f "hello"
```
Params will be `{ a: 5, b: 'Bob', c: true, d: false, e: { f: 'hello' } }`

#### Emit an event with params & meta 
```bash
mol $ emit "user.created" --a 5 --#b Bob --$groups acb
```
Params will be `{ a: 5 }`, meta will be `{ b: 'Bob' }` and options will be `{ groups: acb }`.

### Benchmark services

Moleculer REPL module has a new bench command to measure your services.

```bash
# Call service until 5 seconds (default)
mol $ bench math.add

# Call service 5000 times
mol $ bench --num 5000 math.add

# Call service until 30 seconds
mol $ bench --time 30 math.add
```

**Options**
```
    --num <number>     Number of iterates
    --time <seconds>   Time of bench
    --nodeID <nodeID>  NodeID (direct call)
```

**Output**

![image](/img/service/repl/bench.gif)


#### Parameters
Please note, parameters can be passed only as JSON string.
```bash
mol $ bench math.add '{ "a": 50, "b": 32 }'
```

### Load a service from file
```bash
mol $ load "./math.service.js"
```

### Load all services from a folder
```bash
mol $ load "./services"
```

### List metrics
```bash
mol $ metrics
```

**Options**
```
    -f, --filter <match>  filter metrics (e.g.: 'moleculer.**')
```

**Output**

![image](/img/service/repl/metrics.png#zoomable)

### Cache Keys
You can list keys of cache entries with

```bash
mol $ cache keys
```

**Options**
```
-f, --filter <match>  filter keys
```


### Cache Clear

You clear the cache with:

```bash
mol $ cache clear
```

that by default removes all the entries. If you want to remove a subset of entries, you must add a `pattern`:

**Clear with pattern**
```
mol $ cache clear greeter.*
```

### Event listener

REPL can subscribe and listen to events. To subscribe use:
```
mol $ listener add user.created
```

**Subscribe with group option**
```
mol $ listener add user.created --group abcd
```

To unsubscribe use:
```
mol $ listener remove user.created
```

To list all events that REPL is listening to use
```
mol $ listener list
```

### Custom commands
Custom REPL commands can be defined in broker options to extend Moleculer REPL commands.

```js
// moleculer.config.js
module.exports = {
    replCommands: [
        {
            command: "hello <name>",
            description: "Call the greeter.hello service with name",
            alias: "hi",
            options: [
                { option: "-u, --uppercase", description: "Uppercase the name" }
            ],
            types: {
                string: ["name"],
                boolean: ["u", "uppercase"]
            },
            //parse(command, args) {},
            //validate(args) {},
            //help(args) {},
            allowUnknownOptions: true,
            action(broker, args/*, helpers*/) {
                const name = args.options.uppercase ? args.name.toUpperCase() : args.name;
                return broker.call("greeter.hello", { name }).then(console.log);
            }
        }
    ]
};
```

```bash
mol $ hello -u John
Hello JOHN
```