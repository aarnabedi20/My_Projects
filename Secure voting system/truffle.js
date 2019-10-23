module.exports = {
    //<http://truffleframework.com/docs/advanced/configuration>
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        }
        // For connecting to private geth network (NOT Ganache)
        // development: {
        //     host: "192.168.1.113",
        //     port: 8585,
        //     gas: "0x2fefd8",
        //     network_id: "*" // Match any network id
        // }
    }
};
