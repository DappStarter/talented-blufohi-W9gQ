require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remain eternal install cricket sure squirrel'; 
let testAccounts = [
"0x6e8bc7e4b3c99027f6e0cd31c51f1d489d5d97a59de7ec648c1818500337aade",
"0x5cae5b9d470fc9c40d8f8e59d583fa775acba8f4dca6b49afcd08b3ae76c1ae0",
"0xf31848ea389e36ea02acb0aedd6d51b0528dc9f0577d15385c9171754bc252b0",
"0x644493729b73779a132e98d16c83a716d5e46ef947dca5fcd87217509ff5c655",
"0xff961640f32a8593bf740856fe0936577998b648e6e82960f41c4ac810993a07",
"0xe11277f74c421e201dec1b0f7e1e72be31aa00862f4e32360a941916f51c295c",
"0x6afb7f7800238a15906fb0e6d57ebb901329c81338769b7873b61a36181f0e46",
"0xecd5290b42b9ec053b1eb693151e0bcaabc991f3d160733dec854e0a8b5fbb5f",
"0x75d2fbcf101c6aed7df8491d916c1880c8a1be919464206108488964eea6a90c",
"0x4b0b0c7958497c64ac3620c638edc04e4e521be5ace2ced9e9358fca9fc7eec9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

