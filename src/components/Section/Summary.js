import BombLogo from '../../assets/gautam/bomb.png';
import BShareLogo from '../../assets/gautam/bshares.png';
import BBondLogo from '../../assets/gautam/bbond.png';
import MetamaskLogo from '../../assets/gautam/wMetaMask.png';

import { roundAndFormatNumber } from '../../0x';
import useBombStats from '../../hooks/useBombStats';
import useBondStats from '../../hooks/useBondStats';
import usebShareStats from '../../hooks/usebShareStats';

import { useMemo } from 'react';

function Summary() {
  const bombStats = useBombStats();
  const bShareStats = usebShareStats();
  const tBondStats = useBondStats();

  // bomb price
  const bombPriceInDollars = useMemo(
    () => (bombStats ? Number(bombStats.priceInDollars).toFixed(2) : null),
    [bombStats],
  );
  const bombPriceInBNB = useMemo(() => (bombStats ? Number(bombStats.tokenInFtm).toFixed(4) : null), [bombStats]);
  const bombCirculatingSupply = useMemo(() => (bombStats ? String(bombStats.circulatingSupply) : null), [bombStats]);
  const bombTotalSupply = useMemo(() => (bombStats ? String(bombStats.totalSupply) : null), [bombStats]);

  // bshare
  const bSharePriceInDollars = useMemo(
    () => (bShareStats ? Number(bShareStats.priceInDollars).toFixed(2) : null),
    [bShareStats],
  );
  const bSharePriceInBNB = useMemo(
    () => (bShareStats ? Number(bShareStats.tokenInFtm).toFixed(4) : null),
    [bShareStats],
  );
  const bShareCirculatingSupply = useMemo(
    () => (bShareStats ? String(bShareStats.circulatingSupply) : null),
    [bShareStats],
  );
  const bShareTotalSupply = useMemo(() => (bShareStats ? String(bShareStats.totalSupply) : null), [bShareStats]);

  // bbonds
  const tBondPriceInDollars = useMemo(
    () => (tBondStats ? Number(tBondStats.priceInDollars).toFixed(2) : null),
    [tBondStats],
  );
  const tBondPriceInBNB = useMemo(() => (tBondStats ? Number(tBondStats.tokenInFtm).toFixed(4) : null), [tBondStats]);
  const tBondCirculatingSupply = useMemo(
    () => (tBondStats ? String(tBondStats.circulatingSupply) : null),
    [tBondStats],
  );
  const tBondTotalSupply = useMemo(() => (tBondStats ? String(tBondStats.totalSupply) : null), [tBondStats]);
  return (
    <div className="summary">
      <h2>Bomb Finance Summary</h2>
      <hr />

      <div className="summary-group">
        <div className="summary-group__currency">
          <table>
            <tr>
              <th></th>

              <th>Current Supply</th>

              <th>Total Supply</th>

              <th>Price</th>

              <th></th>
            </tr>

            <tr>
              <td>
                <img src={BombLogo} />
                $BOMB
              </td>

              <td>{roundAndFormatNumber(bombCirculatingSupply, 2)}</td>

              <td>{roundAndFormatNumber(bombTotalSupply, 2)}</td>

              <td>
                <p>${bombPriceInDollars ? roundAndFormatNumber(bombPriceInDollars, 2) : '-.--'}</p>
                <p>{bombPriceInBNB ? bombPriceInBNB : '-.----'} BTC </p>
              </td>

              <td>
                <img src={MetamaskLogo} />
              </td>
            </tr>

            <tr>
              <td>
                <img src={BShareLogo} />
                $BSHARE
              </td>

              <td>{roundAndFormatNumber(bShareCirculatingSupply, 2)}</td>

              <td>{roundAndFormatNumber(bShareTotalSupply, 2)}</td>

              <td>
                <p>${bSharePriceInDollars ? bSharePriceInDollars : '-.--'} </p>
                <p>{bSharePriceInBNB ? bSharePriceInBNB : '-.----'} BTC </p>
              </td>

              <td>
                <img src={MetamaskLogo} />
              </td>
            </tr>

            <tr>
              <td>
                <img src={BBondLogo} />
                $BBOND
              </td>

              <td>{roundAndFormatNumber(tBondCirculatingSupply, 2)}</td>

              <td>{roundAndFormatNumber(tBondTotalSupply, 2)}</td>

              <td>
                <p>${tBondPriceInDollars ? tBondPriceInDollars : '-.--'} </p>
                <p>{tBondPriceInBNB ? tBondPriceInBNB : '-.----'} BTC </p>
              </td>

              <td>
                <img src={MetamaskLogo} />
              </td>
            </tr>
          </table>
        </div>

        <div className="summary-group__data"></div>
      </div>
    </div>
  );
}

export default Summary;
