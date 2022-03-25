const HDWalletProvider = require('@truffle/hdwallet-provider');
// const fs = require('fs');
// const privateKey = fs.readFileSync(".secret").toString().trim();
const infuraURL = '<HTTPS ENDPOINT HERE>';

module.exports = {
	contracts_build_directory: './client/src/contracts',
	networks: {
		development: {
			host: '127.0.0.1',
			port: 5500,
			network_id: '*'
		},
		rinkeby: {
			provider: () =>
				new HDWalletProvider(
					'3f841bf589fdf83a521e55d51afddc34fa65351161eead24f064855fc29c9580',
					'http://localhost:5500'
				),
			network_id: 3,
			gas: 5500000,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true
		}
	},
	compilers: {
		solc: {
			version: '0.7.1'
		}
	}
};
