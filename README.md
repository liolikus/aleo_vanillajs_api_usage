# Aleo Network Client usage with Vanilla JS code examples


How to install

```
npm install
npm run dev
```

# Latest Block
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let latestBlock = await public_connection.getLatestBlock();
        return latestBlock;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L37
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/83c8e1de-2281-4b0f-be4a-8480bb3a6101)

# Get Program Mapping Value
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let programId = "credits.aleo";
        let mappingName = "account";
        let key = "aleo1xvlh6eyf5lgfv2z5za47j6qkh3uv5e0ga6gdzg5l4rssheymxsqqsnkgc4";
        let getMappingValue = await public_connection.getProgramMappingValue(programId, mappingName, key);//programId, mappingName, key (e.g. wallet address)
        return getMappingValue;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L92
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/1f52bcc0-d2c9-446d-94a7-0d8a44ebda0c)

# Get Program Mappings
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getProgramMappingNames = await public_connection.getProgramMappingNames("credits.aleo");//Program ID
        return getProgramMappingNames;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L81
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/c245f14c-d50b-4749-8cc8-4ccd4c1b30d5)

# Get Program by ID
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getProgram = await public_connection.getProgram("the_liolik_t.aleo");//Program ID
        return getProgram;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L70
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/5837f452-bfb9-482f-a7c3-eaaa1a2d58e9)

# Get Latest Block Height
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let latestHeight = await public_connection.getLatestHeight();
        return latestHeight;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L48
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/3ba16d51-4c2e-471d-b078-2b5751e9be90)

# Get Transaction by ID
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getTransaction = await public_connection.getTransaction("at1549phr9hzgzgan4e86qmqjx7jfct8dlu3zmwuhl2glmtdjt78grqluvgf7");//tx_id
        return getTransaction;
https://github.com/liolikus/aleo_vanillajs_api_usage/blob/cccd3b2feb4c66dc99f1a6d455e0466a59ea4eaa/worker.js#L59
![image](https://github.com/liolikus/aleo_vanillajs_api_usage/assets/85246338/193bb607-60d1-4bf2-9302-2ade61f598d9)







