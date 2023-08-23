VeridaLoginExample = () => {
    const [veridaContext, setVeridaContext] = useState(undefined);
    const [successMessage, setSuccessMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [processingWc, setProcessingWc] = useState(false);
    const [walletConnector, setWalletConnector] = useState(undefined);
    this.CONTEXT_NAME = 'Verida Tutorial';


    React.useEffect(async () => {
        // We use this to check if we are logged in
        if (!veridaContext) {
            // we don't have veridaContext in local state
            // Check if we have a stored session
            //  hasSession is from the package "@verida/account-web-vault"
            if (hasSession(this.CONTEXT_NAME)) {
                // we know we have a session already
                login(); // when logged in this will just setup a Verida Context
            }
        }
    }, []);

    initWalletConnect = async function () {
        // see link to learn more on how to initialize wallet connect
        // https://docs.walletconnect.com/1.0/quick-start/dapps/client#initiate-connection

        const bridgeURL = 'https://bridge.walletconnect.org';
        const connector = new WalletConnect.default({
            bridge: bridgeURL
        });

        // Check if connection is already established
        if (!connector.connected) {
            // create new session
            await connector.createSession();
        }
        connector.on("connect", (error, payload) => {
            console.log("WalletConnect on connect payload:", payload);
        })
        connector.on("disconnect", (error, payload) => {
            if (error) {
                console.error(error);
                return;
            }
        });
        return connector
    }

    login = async function () {
        const CHAIN_ID = 'eip155:1';
        setIsLoading(true)
        connector = await initWalletConnect()
        setWalletConnector(connector)
        // Create a VaultAccount. This takes a VaultAccountConfig parameter.
        const account = new VaultAccount({
            request: {
                logoUrl: 'https://developers.verida.io/img/tutorial_login_request_logo_170x170.png',
                // An optional WalletConnect object
                walletConnect: {
                    version: connector.version,
                    uri: connector.uri,
                    chainId: CHAIN_ID
                }
            },
        });
        const context = await Network.connect({
            client: {
                environment: 'testnet'
            },
            account: account,
            context: {
                name: this.CONTEXT_NAME
            }
        });
        if (context) {
            // set the local state variable
            setVeridaContext(context);
            setIsLoading(false)
        }
    };

    logout = async function () {
        // disconnect the Verida session
        await veridaContext.account.disconnect(this.CONTEXT_NAME);
        // reset the internal state
        setVeridaContext(undefined);
    };

    signInPersonalMessage = async function () {
        setProcessingWc(true)
        try {
            const did = veridaContext.account.accountDid
            const message = `This is my DID ${did}`;
            const address = walletConnector._accounts[0]
            const msgParams = [
                message,
                address
            ];
            // Learn more about WalletConnect personal_sign here 
            // https://docs.walletconnect.com/1.0/quick-start/dapps/client#sign-personal-message-personal_sign
            const result = await walletConnector.signPersonalMessage(msgParams);
            if (result) {
                setSuccessMessage(result)
            }
        } catch (error) {
            console.log({ error })
            if (error.message && error.message === "Session currently disconnected") {
                setErrorMessage(`
				Wallet Connect : ${error.message}
				Please click the on the logout button and
				login again to establish a wc session
			   `)
            }
        } finally {
            setProcessingWc(false)
        }
    }

    // if we have a veridaContext we are logged in
    if (veridaContext) {
        // user is logged in
        return (
            <div>
                {isLoading ? 'Verida connect in progress please wait....' :
                    <>
                        <h3 style={{ marginBottom: '0.4rem' }}>
                            Logged in! Your
                            <a href='/docs/concepts/accounts-and-identity'
                                style={{ marginRight: "0.2rem" }}>
                                DID
                            </a>
                            is:
                        </h3>
                        <span
                            style={{
                                display: 'block', marginTop: '0.7rem',
                                marginBottom: '0.7rem'
                            }}
                        >
                            {veridaContext.account.accountDid}
                        </span>
                        {
                            successMessage && <h3>
                                Successfully	Signed Signature :
                                <pre>{successMessage}</pre>
                            </h3>
                        }
                        <button onClick={this.logout}>Logout</button>
                        {
                            processingWc ? 'Processing....' :
                                <button onClick={this.signInPersonalMessage}>
                                    Sign Personal Message
                                </button>
                        }
                    </>
                }
                {
                    errorMessage &&
                    <span style={{ color: "red", display: 'block', fontStyle: 'italic' }}>
                        {errorMessage}
                    </span>
                }
            </div>
        );
    } else {
        return (
            <div>
                <button onClick={this.login}>Login</button>
            </div>
        );
    }
}