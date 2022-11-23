---
id: tokens
title: Tokens
---
import Link from '@docusaurus/Link';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import axios from 'axios';
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const GwBaseList = ({cacheKey, url, explorerUrl}) => {
  const { isLoading, error, data } = useQuery([cacheKey], () =>
    axios.get(url).then((res) => res.data)
  );
  if (isLoading) return "Loading...";
  if (error || !data) return "Failed to fetch";
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data && Array.isArray(data) && (
          data.map((token) => (
            <tr key={token.ident}>
              <td>{token.displayName}</td>
              <td><Link to={`${explorerUrl}/address/${token.erc20Info.ethAddress}`}>{token.erc20Info.ethAddress}</Link></td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export const EthBaseList = ({cacheKey, url, explorerUrl}) => {
  const { isLoading, error, data } = useQuery([cacheKey], () =>
    axios.post(
      url,
      {
        id: "docs",
        jsonrpc: "2.0",
        method: "getAssetList",
        params: {
          asset: "all",
        }
      }
    ).then((res) => res.data.result)
  );
  if (isLoading) return "Loading...";
  if (error || !data) return "Failed to fetch";
  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data && Array.isArray(data) && (
          data.filter((token) => token.network === "Ethereum" && token.ident !== ZERO_ADDRESS).map((token) => (
            <tr key={token.ident}>
              <td>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <img src={token.info.logoURI} width={24} style={{ marginRight: 6 }} />
                  {token.info.symbol}
                </div>
              </td>
              <td><Link to={`${explorerUrl}/address/${token.ident}`}>{token.ident}</Link></td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export const TokenList = () => {
  return (
    <>
      <Tabs
        defaultValue="mainnet"
        values={[
          { label: 'Mainnet', value: 'mainnet', },
          { label: 'Testnet', value: 'testnet', },
        ]}
      >
        <TabItem value="mainnet">
          <Tabs
            defaultValue="gw"
            values={[
              { label: 'Godwoken', value: 'gw', },
              { label: 'Ethereum', value: 'eth', },
              { label: 'BSC', value: 'bsc', },
            ]
          }>
            <TabItem value="gw">
              <GwBaseList
                cacheKey="gw"
                url="https://raw.githubusercontent.com/godwokenrises/godwoken-info/main/mainnet_v1/bridged-token-list.json"
                explorerUrl="https://gw-mainnet-explorer.nervosdao.community"
              />
            </TabItem>
            <TabItem value="eth">
              <EthBaseList
                cacheKey="eth"
                url="https://forcebridge.com/api/force-bridge/api/v1"
                explorerUrl="https://etherscan.io"
              />
            </TabItem>
            <TabItem value="bsc">
              <EthBaseList
                cacheKey="bsc"
                url="https://forcebridge.com/bscapi/force-bridge/api/v1"
                explorerUrl="https://bscscan.com"
              />
            </TabItem>
          </Tabs>
        </TabItem>
        <TabItem value="testnet">
          <Tabs
            defaultValue="gw-testnet"
            values={[
              { label: 'Godwoken Testnet', value: 'gw-testnet', },
              { label: 'Goerli', value: 'goerli', },
            ]
          }>
            <TabItem value="gw-testnet">
              <GwBaseList
                cacheKey="gw-testnet"
                url="https://raw.githubusercontent.com/godwokenrises/godwoken-info/main/testnet_v1_1/bridged-token-list.json"
                explorerUrl="https://gw-testnet-explorer.nervosdao.community"
              />
            </TabItem>
            <TabItem value="goerli">
              <EthBaseList
                cacheKey="goerli"
                url="https://testnet.forcebridge.com/api/force-bridge/api/v1"
                explorerUrl="https://goerli.etherscan.io"
              />
            </TabItem>
          </Tabs>
        </TabItem>
      </Tabs>
    </>
  );
};

export const Page = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <TokenList/>
    </QueryClientProvider>
  )
};

:::tip

Godwoken Testnet Force Bridge Goerli assets faucet: https://faucet-eth-goerli.ckbapp.dev

:::

On this page you can find tokens deployed on Godwoken and where it has a bridge connection.

# Tokens

Below you can find a list of ERC20 token addresses which could be bridged across the networks.

<Page/>
