import { Component, OnInit } from '@angular/core';

declare var require: any;
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    moduleId: module.id,
    // tslint:disable-next-line:component-selector
    selector: 'regular-table-cmp',
    templateUrl: 'regulartable.component.html'
})

// tslint:disable-next-line:one-line
export class RegularTableComponent implements OnInit{
    public tableData1: TableData;
    public tableData2: TableData;
    public tableData3: TableData;
    public tableDataC: TableData;
    /* --------------  STANDARDS  -------------- */
    // PERSONAL
    public tableDataAPTF: TableData;
    public tableDataTBVA: TableData;
    public tableDataVFT: TableData;
    public tableDataMP: TableData;
    public tableDataMCR: TableData;
    public tableDataHCD: TableData;
    public tableDataHCW: TableData;
    public tableDataHCM: TableData;
    public tableDataHCY: TableData;
    // PROJECT
    public tableDataBOQ: TableData;
    public tableDataPRF: TableData;
    public tableDataPF: TableData;
    public tableDataGST: TableData;
    // Enterprise


    ngOnInit() {

        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Niger', 'Oud-Turnhout', '$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', '$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', '$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', '$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', '$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', '$78,615']
            ]
        };
        this.tableData2 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice', '$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
            ]
        };

        this.tableData3 = {
            headerRow: [ 'ID', 'Name',  'Salary', 'Country', 'City' ],
            dataRows: [
                ['1', 'Dakota Rice (Success)', '$36,738', 'Niger', 'Oud-Turnhout' ],
                ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
                ['3', 'Sage Rodriguez (Info)', '$56,142', 'Netherlands', 'Baileux' ],
                ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
                ['5', 'Doris Greene (Danger)', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
                ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ],
                ['7', 'Mike Chaney (Warning)', '$38,735', 'Romania', 'Bucharest' ]
            ]
        };
      this.tableDataC = {
        headerRow: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
        dataRows: [
          // noUiSlider.create(sliderRegular, {
          //   start: 40,
          //   connect: [true, false],
          //   range: {
          //     min: 0,
          //     max: 100
          //   }
          // }),
          // noUiSlider.create(sliderDouble, {
          //   start: [20, 60],
          //   connect: true,
          //   range: {
          //     min: 0,
          //     max: 100
          //   }
          // })
        ]
      };

      /* 8888888888888888888888888888 COLOURS TABLES FOR STANDARDS 8888888888888888888888 */
      /* '''''''''''''''''''''''''''''' Personal ''''''''''''''''''''''''''' */

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataAPTF = {
        headerRow: ['ID', 'Task', 'Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dataRows: [
          ['1', 'wall', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['2', 'Minerva Hooper', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
          ['3', 'Sage(Info)', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['4', 'Chaney', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
          ['5', 'Roofing(info)', '542', '443', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['6', 'Garage(success)', '412', '243', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataMP = {
        headerRow: ['ID', 'Task', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
          ['2', 'Minerva Hooper', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['3', 'Sage Rodriguez (Info)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
          ['4', 'Philip Chaney', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['5', 'Doris Greene (Danger)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695'],
          ['6', 'Mason Porter', '320', '780', '553', '453', '326', '434', '568', '610', '756', '895'],
          ['7', 'Mike Chaney (Warning)', '280', '580', '453', '353', '300', '364', '368', '410', '636', '695']
        ]
      };

      /* ---------------------  TABLE1 - VFT  ---------------------- */

      this.tableDataVFT = {
        headerRow: ['ID', 'Task', 'Planned Value', 'Actual Value', 'Variance'],
        dataRows: [
          ['1', 'wall', '$36,738', '$39,038', '-0.4'],
          ['2', 'Minerva Hooper', '$23,789', '$36,738', '-0.8%'],
          ['3', 'Sage(Info)', '$56,142', '$36,738', '34%'],
          ['4', 'Chaney', '$38,735', '$36,738', '6%'],
          ['5', 'Roofing(info)', '$63,542', '$60,040', '6%', ],
          ['6', 'Garage(success)', '$8,615', '$6,000', '10%']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataTBVA = {
        headerRow: ['ID', 'Task', 'Planned', 'Actual', 'Variance'],
        dataRows: [
          ['1', 'wall', '6', '8', '-0.4'],
          ['2', 'Minerva Hooper', '89', '78', '-0.8%'],
          ['3', 'Sage(Info)', '42', '38', '34%'],
          ['4', 'Chaney', '35', '38', '6%'],
          ['5', 'Roofing(info)', '63', '60', '6%', ],
          ['6', 'Garage(success)', '15', '20', '10%']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataMCR = {
        headerRow: ['ID', 'Task', 'Planned Cummulative to Date', 'Actual to Date', 'Variance'],
        dataRows: [
          ['1', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['2', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['3', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['4', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['5', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['6', 'Sales (Success)', '$36,738', '$34,738', '0.2%'],
          ['7', 'Sales (Success)', '$36,738', '$34,738', '0.2%']
        ]
      };

      /* 808080808080808080808 -----------HC----------- 08080808080808080808 */
      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataHCD = {
        headerRow: ['ID', 'Task', 'Start', 'Finish'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
          ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
          ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
          ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
          ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
          ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
          ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataHCW = {
        headerRow: ['ID', 'Task', 'Start', 'Finish'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
          ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
          ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
          ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
          ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
          ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
          ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
        ]
      };
      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataHCM = {
        headerRow: ['ID', 'Task', 'Start', 'Finish'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
          ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
          ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
          ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
          ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
          ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
          ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataHCY = {
        headerRow: ['ID', 'Task', 'Start', 'Finish'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', '12/03/2018', '12/06/2018'],
          ['2', 'Minerva Hooper', '12/03/2018', '12/06/2018'],
          ['3', 'Sage Rodriguez (Info)', '12/03/2018', '12/06/2018'],
          ['4', 'Philip Chaney', '12/03/2018', '12/06/2018'],
          ['5', 'Doris Greene (Danger)', '12/03/2018', '12/06/2018'],
          ['6', 'Mason Porter', '12/03/2018', '12/06/2018'],
          ['7', 'Mike Chaney (Warning)', '12/03/2018', '12/06/2018']
        ]
      };
      /* '''''''''''''''''''''''''''''' Projects ''''''''''''''''''''''''''' */

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataBOQ = {
        headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
          ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
          ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
          ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
          ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
          ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
          ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataPRF = {
        // tslint:disable-next-line:max-line-length
        headerRow: ['ID', 'Task Description', 'Planned Start', 'Planned Finish', 'Actual Start', 'Actual Finish', 'Planned Cumulative Measurement', 'Actual Cumulative Measurement', 'Planned Cumulative Measurement at Completion', 'Planned Cumulative Measurement at Completion', 'Variance in Days'],
        dataRows: [
          // tslint:disable-next-line:max-line-length
          ['1', 'Dakota Rice (Success)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          // tslint:disable-next-line:max-line-length
          ['2', 'Minerva Hooper', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          // tslint:disable-next-line:max-line-length
          ['3', 'Sage Rodriguez (Info)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          ['4', 'Philip Chaney', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          // tslint:disable-next-line:max-line-length
          ['5', 'Doris Greene (Danger)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          ['6', 'Mason Porter', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------'],
          // tslint:disable-next-line:max-line-length
          ['7', 'Mike Chaney (Warning)', '12/02/2018', '12/02/2019', '20/02/2018', '--/--/----', '--/--/----', '509', '----', '405', '----', '1200', '-----', '------']
        ]
      };

      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataPF = {
        headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
          ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
          ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
          ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
          ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
          ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
          ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
        ]
      };
      /* ---------------------  TABLE1  ---------------------- */

      this.tableDataGST = {
        headerRow: ['ID', 'Task Description', 'Units', 'Reality', 'Rate', 'Amount'],
        dataRows: [
          ['1', 'Dakota Rice (Success)', 'm3', '12099', '60%', '25000'],
          ['2', 'Minerva Hooper', 'm3', '12099', '60%', '25000'],
          ['3', 'Sage Rodriguez (Info)', 'm3', '12099', '60%', '25000'],
          ['4', 'Philip Chaney', 'm3', '12099', '60%', '25000'],
          ['5', 'Doris Greene (Danger)', 'm3', '12099', '60%', '25000'],
          ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester'],
          ['7', 'Mike Chaney (Warning)', 'm3', '12099', '60%', '25000']
        ]
      };
    }
}
