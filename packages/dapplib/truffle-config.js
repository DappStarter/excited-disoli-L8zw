require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth museum common hunt globe equal genius'; 
let testAccounts = [
"0xb268a6bb1e651c0407d6c11474a4366880d7d59bc19b0cb18a1d87323f6793a4",
"0x8f13634cf35b0430c8eb2b795a5cba20fa6a33d11466f112ff1cf0d344206e01",
"0xa351f27d7efa6462636637bd41cc8a230cff3b8d3eae7fc91e410e8c5e0f1a78",
"0x0c4e18bcc3bea5b54ebe238a0fbe311b0e10b88a0b1b1d6155be31a8f287bcbd",
"0x71eae3c6d85d1853f39f2e20602b01f67f224fee99861575c2ddca7e1d15cfe4",
"0x81bfb39d448605e97bfcf8458a314fd809b35f197f2bd9fc18eda4abe7e4245b",
"0x116de52587306bf7d714da5bcafe563962830d24ee72292a3ff19a7c66d5d643",
"0xff91e79a9f101d640f528e62272118e06f441f6a2a13f67991d0397cfc2cf637",
"0x6ba250f858f46c8e805c4b45348ccc7e9cd54f96ba96b80e51fd063b46e874d1",
"0xa461eaaf3bb0cbfc9fa42297a82c5aeaf947a29c4d45ee40bced22602db2ceee"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

