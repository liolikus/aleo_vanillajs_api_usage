
import {
    Account,
    initThreadPool,
    PrivateKey,
    ProgramManager,
    AleoNetworkClient,
} from "@aleohq/sdk";

await initThreadPool();

const hello_hello_program =
    "program hello_hello.aleo;\n" +
    "\n" +
    "function hello:\n" +
    "    input r0 as u32.public;\n" +
    "    input r1 as u32.private;\n" +
    "    add r0 r1 into r2;\n" +
    "    output r2 as u32.private;\n";

async function localProgramExecution(program, aleoFunction, inputs) {
    const programManager = new ProgramManager();

    // Create a temporary account for the execution of the program
    const account = new Account();
    programManager.setAccount(account);

    const executionResponse = await programManager.run(
        hello_hello_program,
        "hello",
        ["5u32", "5u32"],
        false,
    );
    return executionResponse.getOutputs();
}

async function getLatestBlockAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let latestBlock = await public_connection.getLatestBlock();
        return latestBlock;
    } catch (error) {
        console.error("Error in getLatestBlock:", error);
        throw error; 
    }
}

async function getLatestHeightAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let latestHeight = await public_connection.getLatestHeight();
        return latestHeight;
    } catch (error) {
        console.error("Error in getLatestHeight:", error);
        throw error; 
    }
}

async function getTransactionAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getTransaction = await public_connection.getTransaction("at1549phr9hzgzgan4e86qmqjx7jfct8dlu3zmwuhl2glmtdjt78grqluvgf7");//tx_id
        return getTransaction;
    } catch (error) {
        console.error("Error in getTransaction:", error);
        throw error; 
    }
}

async function getProgramAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getProgram = await public_connection.getProgram("the_liolik_t.aleo");//Program ID
        return getProgram;
    } catch (error) {
        console.error("Error in getProgram:", error);
        throw error; 
    }
}

async function getProgramMappingNamesAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let getProgramMappingNames = await public_connection.getProgramMappingNames("credits.aleo");//Program ID
        return getProgramMappingNames;
    } catch (error) {
        console.error("Error in getProgramMappingNames:", error);
        throw error; 
    }
}

async function getMappingValueAsync() {
    try {
        let public_connection = new AleoNetworkClient("https://api.explorer.aleo.org/v1");
        let programId = "credits.aleo";
        let mappingName = "account";
        let mappingKey = "aleo1xvlh6eyf5lgfv2z5za47j6qkh3uv5e0ga6gdzg5l4rssheymxsqqsnkgc4";
        let getMappingValue = await public_connection.getMappingValue(programId, mappingName, mappingKey);//programId, mappingName, key (e.g. wallet address)
        return getMappingValue;
    } catch (error) {
        console.error("Error in getMappingValue:", error);
        throw error; 
    }
}



function getPrivateKey() {
    return new PrivateKey().to_string();
}

onmessage = async function (e) {
    if (e.data === "execute") {
        const result = await localProgramExecution();
        postMessage(result);
    } else if (e.data === "key") {
        const result = getPrivateKey();
        postMessage(result);
    } else if (e.data === "block") {
        try {
            const result = await getLatestBlockAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    } else if (e.data === "height") {
        try {
            const result = await getLatestHeightAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    } else if (e.data === "transaction") {
        try {
            const result = await getTransactionAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    } else if (e.data === "program") {
        try {
            const result = await getProgramAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    } else if (e.data === "mappingNames") {
        try {
            const result = await getProgramMappingNamesAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    } else if (e.data === "mappingValue") {
        try {
            const result = await getMappingValueAsync();
            postMessage(result);
        } catch (error) {
            postMessage({ error: error.message }); 
        }
    }
    
};


