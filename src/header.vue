<template>
<div id="header">
  <a id="logo" href="/">
     <img src="./assets/images/logo.png">
    <span>ReportingCenter</span>
  </a>
  <ul id="nav">
<li class="nav-dropdown-container learn">
  <a class="nav-link current">Financial</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><ul>
      <li><router-link class="current" to="/Financial/OverdueBCT">Overdue BCT(Daily)</router-link>

 
      <li><a href="/v2/api/" class="nav-link current">Overdue BDT(Daily)</a></li>
      <li><a href="/v2/style-guide/" class="nav-link">ATRIE&Portfolio(Monthly)</a></li>
      <li><a href="/v2/examples/" class="nav-link">Stamp Duty Template</a></li>
    </ul></li>
  </ul>
</li>

<li class="nav-dropdown-container ecosystem">
  <a class="nav-link">Collection</a><span class="arrow"></span>
  <ul class="nav-dropdown">
   <li><ul>
      <li><a href="/v2/guide/" class="nav-link">T+30 minutes(Monthly)</a></li>
      <li><a href="/v2/api/" class="nav-link">VFS Nonperformance Loan Detail</a></li>
      <li><a href="/v2/style-guide/" class="nav-link">VFS Performance Call Detail</a></li>
      <li><a href="/v2/examples/" class="nav-link">Penalty Waived</a></li>
      <li><a href="#" class="nav-link">Receipt Detail</a></li>
      <li><a href="#" class="nav-link">Accounts Table(Daily)</a></li>
      <li><a href="#" class="nav-link">Collection Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Dealer Cure Amount</a></li>
      <li><a href="#" class="nav-link">Dealer Cure Rental</a></li>
      <li><a href="#" class="nav-link">6X Cure</a></li>
      <li><a href="#" class="nav-link">Maturity Contract</a></li>
      <li><a href="#" class="nav-link">Direct Debit Response</a></li>
      <li><a href="#" class="nav-link">Dealer Cure Aount(Excluded VCE)</a></li>
      <li><a href="#" class="nav-link">Restructure Contract(Collection)</a></li>
      <li><a href="#" class="nav-link">Quotation Data Report</a></li>
    </ul></li>

    <li><h4>By Dealer Report</h4></li>
    <li><ul>
      <li><a href="#" class="nav-link" target="_blank">Plus30 Ratio(Daily)</a></li>
      <li><a href="#" class="nav-link" target="_blank">Plus1 Ratio(Daily)</a></li>
      <li><a href="#" class="nav-link" target="_blank">Overdue Report(Daily)</a></li>
    </ul></li>
    <li><h4>Insurance Report</h4></li>
    <li>
      <ul>
        <li><a href="#" class="nav-link" target="_blank">Insurance Renewal Status List(Daily)</a></li>
        <li><a href="#" class="nav-link" target="_blank">Insurance Claim Report(Daily)</a></li>
        <li><a href="#" class="nav-link" target="_blank">Insurance Rebate Report(Dailly)</a></li>
        <li><a href="#" class="nav-link" target="_blank">Insurance Application Report(Dailly)</a></li>
      </ul>
    </li>
    
  </ul>
</li>
<li class="nav-dropdown-container support-vue">
  <a href="#" class="nav-link">Credit</a><span class="arrow"></span>
  <ul class="nav-dropdown">
   
   <li><h4>Monthly Report</h4></li>
    <li><ul>
      <li><a href="#" class="nav-link">RT Portfolio</a></li>
      <li><a href="#" class="nav-link">Detail Customer Information</a></li>
      <li><a href="#" target="_blank" class="nav-link">Static Asset Pool</a></li>
      <li><a href="#" target="_blank" class="nav-link">Main Info Detail</a></li>
      <li><a href="#" target="_blank" class="nav-link">Receivable Paid</a></li>
      <li><a href="#" target="_blank" class="nav-link">Rental Trans</a></li>
      <li><a href="#" target="_blank" class="nav-link">Repayment Plan</a></li>
    </ul></li>
  <li><h4>Daily Report</h4></li>
    <li><ul>
      
      <li><a href="#" target="_blank" class="nav-link">Overdue Frequency</a></li>
      <li><a href="#" target="_blank" class="nav-link">PBOC Leasing Registration</a></li>
      <li><a href="#" target="_blank" class="nav-link">Modifiled Contract</a></li>
      <li><a href="#" target="_blank" class="nav-link">Pre-approval Process</a></li>
      <li><a href="#" target="_blank" class="nav-link">Pre-approval Process Detail</a></li>
    </ul></li>
     <li><h4>By Dealer Report(Daily)</h4></li>
    <li><ul>
      <li><a href="#" class="nav-link" target="_blank">Dealer Guarantee Detail</a></li>
      <li><a href="#" class="nav-link" target="_blank">Dealer Guarantee Summary</a></li>
      <li><a href="#" class="nav-link" target="_blank">Dealer Exposure Detail</a></li>
      <li><a href="#" class="nav-link" target="_blank">Dealer Exposure Summary</a></li>
      <li><a href="#" class="nav-link" target="_blank">Dealer Exposure Body Builder</a></li>
    </ul></li>
     <li><h4>Other Report </h4></li>
    <li><ul>
      <li><a href="#" class="nav-link" target="_blank">Contract Overdue Status</a></li>
      <li><a href="#" class="nav-link" target="_blank">Repeat Customer Check</a></li>
      <li><a href="#" class="nav-link" target="_blank">Partners</a></li>
      <li><a href="#" class="nav-link" target="_blank">LCC Report</a></li>
    </ul></li>
  </ul>
</li>

<li class="nav-dropdown-container language">
  <a class="nav-link">Accounting</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><h4>Monthly Report</h4></li>
    <li><ul>
      <li><a href="#" class="nav-link">CashFlow Report-Any Time</a></li>
      <li><a href="#" class="nav-link">CashFlow Report-History</a></li>
      <li><a href="#" target="_blank" class="nav-link">Subsidy Ceconciliation</a></li>
      <li><a href="#" target="_blank" class="nav-link">Provision Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Reconclie Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Month End Income Rport-AnyTime</a></li>
      <li><a href="#" target="_blank" class="nav-link">Month End Income Report-History</a></li>
    </ul></li>
  <li><h4>Daily Report</h4></li>
    <li><ul>
      <li><a href="#" target="_blank" class="nav-link">Payment Record</a></li>
      <li><a href="#" target="_blank" class="nav-link">Balance Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Posting Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Disbursement Final Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Financial Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Non Financial Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Income Posting Detail</a></li>
      <li><a href="#" target="_blank" class="nav-link">Redemption Shortfall</a></li>
      <li><a href="#" target="_blank" class="nav-link">Interest Received Hp</a></li>
      <li><a href="#" target="_blank" class="nav-link">Auto Invoicing Report</a></li>
      <li><a href="#" target="_blank" class="nav-link">Income Amortization</a></li>
      <li><a href="#" target="_blank" class="nav-link">Subsidy Amortization</a></li>
       <li><a href="#" target="_blank" class="nav-link">Income Amortization VAT Excluded</a></li>
      <li><a href="#" target="_blank" class="nav-link">Subsidy Amortization VAT Excluded</a></li>
      <li><a href="#" target="_blank" class="nav-link">Charge Detail Report</a></li>
    </ul></li>
<li><h4>Other Report </h4></li>
    <li><ul>
    
      <li><a href="#" class="nav-link" target="_blank">Invoice Report</a></li>
      <li><a href="#" class="nav-link" target="_blank">VAT Invoice Report(Company)</a></li>
      <li><a href="#" class="nav-link" target="_blank">VAT Invoice Report(Individual)</a></li>
      <li><a href="#" class="nav-link" target="_blank">Maturity Contract</a></li>
    </ul></li>
  </ul>
</li>
<li class="nav-dropdown-container learn">
  <a class="nav-link">Operation</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><ul>
      <li><a href="/v2/guide/" class="nav-link">Floating Rate Adjustment List(Daily)</a></li>
      <li><a href="/v2/api/" class="nav-link">Mortgage Status List(Daily)</a></li>
      <li><a href="/v2/style-guide/" class="nav-link">Original Loan Documents Issue List(Daily)</a></li>
      <li><a href="/v2/examples/" class="nav-link">Original Package Docs Pending(Daily)</a></li>
      <li><a href="#" class="nav-link">Original Loan Documents In&Out Tracking(Daily)</a></li>
      <li><a href="#" class="nav-link">Maturity Contract Status(Daily)</a></li>
      <li><a href="#" class="nav-link">Terminate Contracts(Daily)</a></li>
      <li><a href="#" class="nav-link">Leasing Documentation Tracking List(Daily)</a></li>
      <li><a href="#" class="nav-link">Disbursement Summary Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Daily Retail Collection Form(Daily)</a></li>
      <li><a href="#" class="nav-link">CMS Log Report</a></li>
      <li><a href="#" class="nav-link">Restructure Contract Report(Daily)</a></li>
    </ul></li>
  </ul>
</li>
<li class="nav-dropdown-container learn">
  <a class="nav-link">Sales&Marketing</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><ul>
      <li><a href="#" class="nav-link">Customer Phone List(Daily)</a></li>
     
    </ul></li>
  </ul>
</li>
<li class="nav-dropdown-container learn">
  <a class="nav-link">VIT</a><span class="arrow"></span>
  <ul class="nav-dropdown">
    <li><ul>
      <li><a href="#" class="nav-link">Queue Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Customer Line(Daily)</a></li>
      <li><a href="#" class="nav-link">PBOC Report</a></li>
      <li><a href="#" class="nav-link">PLAN B VAT</a></li>
      <li><a href="#" class="nav-link">Cash Flow Report</a></li>
      <li><a href="#" class="nav-link">Collection Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Disbursement Summary Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Auto Invoicing Report(Subsidy)</a></li>
      <li><a href="#" class="nav-link">3X Cure Report</a></li>
      <li><a href="#" class="nav-link">Receipt Detail Report(Daily)</a></li>
      <li><a href="#" class="nav-link">Penalty Waived Report(Daily)</a></li>
      <li><a href="#" class="nav-link">BSM Monitor Report</a></li>
      <li><a href="#" class="nav-link">Receipt Detail KMYW</a></li>
      <li><a href="#" class="nav-link">Accounts Table</a></li>
      <li><a href="#" class="nav-link">PBOC BOTHSIDE COMPANY</a></li>
      <li><a href="#" class="nav-link">PBOC BOTHSIDE INDIVIDUAL</a></li>
    </ul></li>
  </ul>
</li>
  </ul>
</div>
</template>



<script>

import './assets/css/page.css'

 export default {
  name: 'Header',
  data () {
    return {
      msg: 'this is header'
    }
  }
}

</script>


<style>

</style>

