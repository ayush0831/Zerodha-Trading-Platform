import React from "react";

function Brokerage() {
  return (
    <div class="container">
      <div className="row">
        <nav>
          <a href="">Equity</a>
          <a href="">Currency</a>
          <a href="">Commodity</a>
        </nav>
      </div>
      <div class="row p-5 mt-5">
        <h3 style={{ marginLeft: "6rem" }}>Charges for account opening</h3>
        <table
          class="mt-3"
          style={{
            border: "1px solid grey",
            borderCollapse: "collapse",
            width: "85%",
            marginLeft: "6rem",
          }}
        >
          <tr>
            <th style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Type of account
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Charges
            </th>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Online account</td>
            <td style={{ padding: "10px" }}>
              <button style={{ backgroundColor: "#238c31ff", color: "white" }}>
                Free
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              Offline account
            </td>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              <button style={{ backgroundColor: "#238c31ff", color: "white" }}>
                Free
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>NRI account (offline only)</td>
            <td style={{ padding: "10px" }}>₹ 500</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", backgroundColor: "#EEEEEE" }}>
              Partnership, LLP, HUF, or Corporate accounts (offline only)
            </td>
            <td style={{ padding: "10px", backgroundColor: "#EEEEEE" }}>
              ₹ 500
            </td>
          </tr>
        </table>
      </div>
      <div class="row mt-5">
        <h3 style={{ marginLeft: "9rem" }}>
          Demat AMC (Annual Maintenance Charge)
        </h3>
        <table
          class="mt-3"
          style={{
            border: "1px solid grey",
            borderCollapse: "collapse",
            width: "80%",
            marginLeft: "9rem",
          }}
        >
          <tr>
            <th style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Value of holdings
            </th>
            <th style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              AMC
            </th>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Up to ₹4 lakh</td>
            <td style={{ padding: "10px" }}>
              <button style={{ backgroundColor: "#238c31ff", color: "white" }}>
                Free
              </button>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              ₹4 lakh - ₹10 lakh
            </td>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              ₹ 100 per year, charged quarterly*
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Above ₹10 lakh</td>
            <td style={{ padding: "10px" }}>
              ₹ 300 per year, charged quarterly
            </td>
          </tr>
        </table>
        <p style={{ marginLeft: "9rem", fontSize: "13px" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more <br />
          about BSDA, <a>click here</a>.
        </p>
      </div>
      <div class="row mt-5">
        <h3 style={{ marginLeft: "9rem" }}>
          Charges for optional value added services
        </h3>
        <table
          class="mt-3"
          style={{
            border: "1px solid grey",
            borderCollapse: "collapse",
            width: "80%",
            marginLeft: "9rem",
          }}
        >
          <tr>
            <td style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Service
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Billing Frquency
            </td>
            <td style={{ padding: "10px", borderBottom: "1px solid grey" }}>
              Charges
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Tickertape</td>
            <td style={{ padding: "10px" }}>Monthly / Annual</td>
            <td style={{ padding: "10px" }}>Free: 0 | Pro: 249/2399</td>
          </tr>
          <tr>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              Smallcase
            </td>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              Per transaction
            </td>
            <td style={{ padding: "10px", backgroundColor: "#F2F2F2" }}>
              Buy & Invest More: 100 | SIP: 10
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px" }}>Kite Connect</td>
            <td style={{ padding: "10px" }}>Monthly</td>
            <td style={{ padding: "10px" }}>Connect: 500 | Personal: Free</td>
          </tr>
        </table>
      </div>
      <div class="row mt-5 p-5">
        <h4 class="mb-5">Charges explained</h4>
        <div class="col-6">
          <p>Securities/Commodities transaction tax</p>
          <p style={{ fontSize: "13px" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy <br /> and sell sides when trading equity
            delivery. Charged only on selling side when trading <br />
            intraday or on F&O.
            <br />
            <br /> When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge.
            <br /> Important to keep a tab.
          </p>

          <p>Transaction/Turnover Charges</p>
          <p style={{ fontSize: "13px" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
            <br />
            <br /> BSE has revised transaction charges in XC, XD, XT, Z and ZP
            groups to ₹10,000 per crore <br /> w.e.f 01.01.2016. (XC and XD
            groups have been merged into a new group X w.e.f 01.12.2017) <br />
            <br />
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
            <br />
            <br /> BSE has revised transaction charges for group A, B and other
            non exclusive scrips (non- <br />
            exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore
            of turnover on flat rate <br /> basis w.e.f. December 1, 2022.
            <br />
            <br /> BSE has revised transaction charges in M, MT, TS and MS
            groups to ₹275 per crore of gross
            <br /> turnover.
          </p>

          <p>Call & trade</p>
          <p style={{ fontSize: "13px" }}>
            Additional charges of ₹50 per order for orders placed through a
            dealer at Zerodha including
            <br /> auto square off orders.
          </p>
          <p>Stamp charges</p>
          <p style={{ fontSize: "13px" }}>
            Stamp charges by the Government of India as per the Indian Stamp Act
            of 1899 for
            <br />
            transacting in instruments on the stock exchanges and depositories.
          </p>
          <p>NRI brokerage charges</p>
          <ul style={{ fontSize: "13px" }}>
            <li class="mb-2">
              For a non-PIS account, 0.5% or ₹50 per executed order for equity
              and F&O (whichever is
              <br /> lower).
            </li>
            <li class="mb-2">
              For a PIS account, 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              ₹500 + GST as yearly account maintenance charges (AMC) charges.
            </li>
          </ul>
          <p>Account with debit balance</p>
          <p style={{ fontSize: "13px" }}>
            If the account is in debit balance, any order placed will be charged
            ₹40 per executed order <br /> instead of ₹20 per executed order.
          </p>
          <p>Charges for Investor's Protection Fund Trust (IPFT) by NSE</p>
          <ul style={{ fontSize: "13px" }}>
            <li class="mb-2">
              Equity and Futures - ₹10 per crore + GST of the traded value.
            </li>
            <li class="mb-2">
              Options - ₹50 per crore + GST traded value (premium value).
            </li>
            <li>
              Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per
              lakh + GST
              <br /> of premium for Options.
            </li>
          </ul>
          <p>Margin Trading Facility (MTF)</p>
          <ul style={{ fontSize: "13px" }}>
            <li class="mb-2">
              MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              The interest is applied <br />
              from T+1 day until the day MTF stocks are sold.
            </li>
            <li class="mb-2">
              MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is lower.
            </li>
            <li>
              MTF pledge charge: ₹15 + GST per pledge and unpledge request per
              ISIN.
            </li>
          </ul>
        </div>
        <div class="col-6">
          <p>GST</p>
          <p style={{ fontSize: "13px" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges <br /> + transaction charges)
          </p>

          <p>SEBI Charges</p>
          <p style={{ fontSize: "13px" }}>
            CCharged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the <br />
            markets.
          </p>

          <p>DP (Depository participant) charges</p>
          <p style={{ fontSize: "13px" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading<br /> account ledger when stocks are sold,
            irrespective of quantity.
            <br />
            <br /> Female demat account holders (as first holder) will enjoy a
            discount of ₹0.25 per transaction<br /> on the CDSL fee.
            <br />
            <br /> Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL <br/>fee.
          </p>
          <p>Pledging charges</p>
          <p style={{ fontSize: "13px" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
          <p>AMC (Account maintenance charges)</p>
          <p style={{ fontSize: "13px" }}>
            For BSDA demat account: Zero charges if the holding value is less
            than ₹4,00,000. To learn<br /> more about BSDA, <a href="#">Click here</a> <br/><br/> For non-BSDA
            demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To
            learn<br /> more about AMC, <a href="#">Click here</a>
          </p>
          <p>Corporate action order charges</p>
          <p style={{ fontSize: "13px" }}>
            ₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through<br /> Console.
          </p>
          <p>Off-market transfer charges</p>
          <p style={{ fontSize: "13px" }}>
            ₹25 per transaction.
          </p>
          <p>Physical CMR request</p>
          <p style={{ fontSize: "13px" }}>
            First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.
          </p>
          <p>Payment gateway charges</p>
          <p style={{ fontSize: "13px" }}>
            ₹9 + GST (Not levied on transfers done via UPI)
          </p>
          <p>Delayed Payment Charges</p>
          <p style={{ fontSize: "13px" }}>
           Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading <br />account. <a href="#">Learn more.</a> 
          </p>
          <p>Trading using 3-in-1 account with block functionality</p>
          <ul style={{ fontSize: "13px" }}>
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
