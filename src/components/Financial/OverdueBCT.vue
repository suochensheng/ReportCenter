

<template>

    <row style="padding: 20px 25px;">
<h2 class="title">Overdue Report BCT</h2>

    <Form :model="formItem" ref="formValidate"  >
        <FormItem>
            <Col span="2">Account Code:</Col>
            <Col span="4">
                 <Input v-model="formItem.accountcode" placeholder="Enter something..."></Input>
            </Col>
          <Col span="4" style="text-align: right;padding-right: 20px;">Contract Number:</Col>
                <Col span="4">
                     <Input v-model="formItem.contractnumber" placeholder="Enter contract number..."></Input>
                </Col>
        </FormItem>
        <FormItem>
            <Row>
                <Col span="2">From Date:</Col>
                <Col span="4">
                    <DatePicker type="date" placeholder="Select date" v-model="formItem.fromdt"></DatePicker>
                </Col>
               <Col span="4" style="text-align: right;padding-right: 20px;">To Date:</Col>
                <Col span="4">
                    <DatePicker type="date" placeholder="Select time" v-model="formItem.todt"></DatePicker>
                </Col>
            </Row>
        </FormItem>
    
        <FormItem>
            <Button type="primary" @click="searchData()" ><Icon type="search"></Icon> Search</Button>
            <Button type="primary"  @click="exportData()"><Icon type="ios-download-outline"></Icon> Export data</Button>
          
        </FormItem>
    </Form>




      <Table :border="showBorder" :stripe="showStripe" :show-header="showHeader" :height="fixedHeader ? 250 : ''" :size="tableSize" 
      :columns="customTableColumns" :loading="isLoading" :data="customTableData" ref="table"></Table>
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </row>
</template>
<style scoped>
  .paging{
      float:right;
      margin-top:10px;
  }
</style>
<script>

    let testData = {
        "customTableData": [
                    {
                        contractnumber: 'F110110',
                        contractid: 18,
                        amt: '782932.89',
                        creationdt: '2016-10-03'
                    },
                    {
                        contractnumber: 'F110111',
                        contractid: 24,
                        amt: '9873524.89',
                        creationdt: '2016-10-01'
                    },
                    {
                        contractnumber: 'F110112',
                        contractid: 30,
                        amt: '23543267.89',
                        creationdt: '2016-10-02'
                    },
                    {
                        contractnumber: 'F110113',
                        contractid: 26,
                        amt: '7634689.89',
                        creationdt: '2016-10-04'
                    },
                    {
                        contractnumber: 'F110114',
                        contractid: 18,
                        amt: '56923567.89',
                        creationdt: '2016-10-03'
                    },
                    {
                        contractnumber: 'F110115',
                        contractid: 24,
                        amt: '678930.89',
                        creationdt: '2016-10-01'
                    },
                    {
                        contractnumber: 'F110116',
                        contractid: 30,
                        amt: '5654324.89',
                        creationdt: '2016-10-02'
                    },
                    {
                        contractnumber: 'F110117',
                        contractid: 26,
                        amt: '23232423.89',
                        creationdt: '2016-10-04'
                    },
                    {
                        contractnumber: 'F110118',
                        contractid: 100,
                        amt: '23543267.89',
                        creationdt: '2016-11-02'
                    },
                    {
                        contractnumber: 'F110119',
                        contractid: 101,
                        amt: '7634689.89',
                        creationdt: '2016-11-04'
                    },
                    {
                        contractnumber: 'F110120',
                        contractid: 111,
                        amt: '56923567.89',
                        creationdt: '2016-11-03'
                    },
                    {
                        contractnumber: 'F110125',
                        contractid: 112,
                        amt: '678930.89',
                        creationdt: '2016-11-01'
                    },
                    {
                        contractnumber: 'F110126',
                        contractid: 113,
                        amt: '5654324.89',
                        creationdt: '2016-11-02'
                    },
                    {
                        contractnumber: 'F110127',
                        contractid: 114,
                        amt: '23232423.89',
                        creationdt: '2016-11-04'
                    }
        ]
    }
    export default {
        data () {
            return {
                formItem: {
                    accountcode: '',
                    contractnumber: '',
                    fromdt: '',
                    todt: ''
                },
                
                isLoading:true,
                showBorder: true,
                showStripe: true,
                showHeader: true,
                showIndex: true,
                showCheckbox: false,
                fixedHeader: false,
                tableSize: 'default',
                customTableData: [],
                ajaxcustomTableData:[],
                // 初始化信息总条数
                dataCount:0,
                // 每页显示多少条
                pageSize:10,
            }
           
        },
         computed: {
            customTableColumns () {
                let columns = [];
                if (this.showCheckbox) {
                    columns.push({
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    })
                }
                if (this.showIndex) {
                    columns.push({
                        type: 'index',
                        width: 60,
                        align: 'center'
                    })
                }
                columns.push({
                    title: '合同号',
                    key: 'contractnumber',
                    sortable: true
                });
                columns.push({
                    title: '合同ID',
                    key: 'contractid',
                    sortable: true
                });
                columns.push({
                    title: '金额',
                    key: 'amt',
                });
                columns.push({
                    title: '创建日期',
                    key: 'creationdt'
                });
                return columns;
            }
        },
        methods:{
            // 获取表格数据
            handleListData(){
                
                // 保存取到的所有数据
                this.ajaxcustomTableData = testData.customTableData;
                this.dataCount = testData.customTableData.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(testData.customTableData.length < this.pageSize){
                    this.customTableData = this.ajaxcustomTableData;
                }else{
                    this.customTableData = this.ajaxcustomTableData.slice(0,this.pageSize);
                }
                this.isLoading=false;
               
            },
            changepage(index){
                var _start = ( index - 1 ) * this.pageSize;
                var _end = index * this.pageSize;
                this.customTableData = this.ajaxcustomTableData.slice(_start,_end);
            },
            exportData () {
                    this.$refs.table.exportCsv({
                        filename: 'Overdue BCT'
                    });
            },
            searchData(){
                 /*ajax here*/
                 this.customTableData=this.customTableData.filter(function(a) {

                  return a.contractnumber == formItem.contractnumber;

                });
            }
        },
        created(){
             this.handleListData();
        }

    }
</script>
