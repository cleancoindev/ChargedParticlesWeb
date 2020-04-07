// Frameworks
import * as _ from 'lodash';

export const GLOBALS = {};

GLOBALS.CODENAME = 'ChargedParticles';
GLOBALS.CODENAME_ABBR = 'CP';
GLOBALS.CODE_VERSION = 'v0.2.5';
GLOBALS.BASE_URL = 'https://charged-particles.netlify.com';
GLOBALS.ACCELERATOR_URL = 'https://charged-particles.netlify.com';
GLOBALS.ACCELERATOR_ROOT = '/app';
GLOBALS.CODE_VERSION_MAJOR = _.join(_.split(GLOBALS.CODE_VERSION.replace('v',''), '.', 1), '.');
GLOBALS.CODE_VERSION_MINOR = _.join(_.split(GLOBALS.CODE_VERSION.replace('v',''), '.', 2), '.');

GLOBALS.STARTING_BLOCK = '6000000';

GLOBALS.ETH_UNIT      = 1e18;
GLOBALS.ETH_PRECISION = 18;

GLOBALS.CREATE_PARTICLE_PRICE   = {
    ETH: {FT: '380000000000000',     NFT: '760000000000000'},
    ION: {FT: '1000000000000000000', NFT: '2000000000000000000'},
};

GLOBALS.DEPOSIT_FEE_MODIFIER    = 1e4;  // 10000  (100%)
GLOBALS.MAX_CUSTOM_DEPOSIT_FEE  = 5e3;  // 5000   (50%)
GLOBALS.MIN_DEPOSIT_FEE         = 1e6;  // 1000000 (0.000000000001 ETH  or  1000000 WEI)

GLOBALS.INFURA_ID = process.env.GATSBY_ETH_INFURA_ID;
GLOBALS.RPC_URL = process.env.GATSBY_ETH_JSONRPC_URL;
GLOBALS.CHAIN_ID = process.env.GATSBY_ETH_CHAIN_ID;
GLOBALS.DFUSE_API_KEY = process.env.GATSBY_DFUSE_API_KEY;

GLOBALS.ION_TOKEN_ID = '340282366920938463463374607431768211456';

GLOBALS.MIN_BLOCK_CONFIRMATIONS = 3;

GLOBALS.SIDEMENU_WIDTH = 274;
GLOBALS.ETH_DISPLAY_PRECISION = 7;

GLOBALS.BOOLEAN_TRUE_HEX  = '0x0000000000000000000000000000000000000000000000000000000000000001';
GLOBALS.BOOLEAN_FALSE_HEX = '0x0000000000000000000000000000000000000000000000000000000000000000';

GLOBALS.WALLET_TYPE_COINBASE        = 'walletLink';
GLOBALS.WALLET_TYPE_WALLETCONNECT   = 'walletconnect';
GLOBALS.WALLET_TYPE_FORTMATIC       = 'fortmatic';
GLOBALS.WALLET_TYPE_TORUS           = 'torus';
GLOBALS.WALLET_TYPE_PORTIS          = 'portis';
GLOBALS.WALLET_TYPE_AUTHEREUM       = 'authereum';
GLOBALS.WALLET_TYPE_SQUARELINK      = 'squarelink';
GLOBALS.WALLET_TYPE_ARKANE          = 'arkane';
GLOBALS.WALLET_TYPE_METAMASK        = 'metamask';
GLOBALS.WALLET_TYPE_NATIVE          = 'native';
