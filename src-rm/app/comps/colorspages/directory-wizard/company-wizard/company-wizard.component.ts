import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

declare var swal:any;
declare var $:any;

interface FileReaderEventTarget extends EventTarget {
    result:string
}
interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage():string;
}

@Component({
    moduleId: module.id,
    selector: 'app-company-wizard',
    templateUrl: 'company-wizard.component.html'
})

export class CompanyWizardComponent implements OnInit {

    public tableData1: TableData;
    public tableData2: TableData;
    items: Observable<any[]>;

    company_role: string; company_name: string; company_address: string; company_contact: string; company_tel: string;
    company_mobile: string; company_email: string;

    readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e:FileReaderEvent) {
                $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    constructor(private router: Router, public location: Location, private db: AngularFirestore) {}

    onFinishWizard(){
        // here you can do something, sent the form to server via ajax and show a success message with swal
        swal('Good job!', 'You clicked the finish button!', 'success')
        .then(nav => {
            this.router.navigateByUrl('projects');
        });
    }

    saveItem() {
        // console.log('dimond');
        this.db.collection('companydirectory').add({
            'company_role': this.company_role,
            'company_name': this.company_name,
            'company_address': this.company_address,
            'company_contact': this.company_contact,
            'company_tel': this.company_tel,
            'company_mobile': this.company_mobile,
            'company_email': this.company_email,
        });
        this.company_email = ''; this.company_mobile = ''; this.company_tel = ''; this.company_contact = '';
        this.company_address = ''; this.company_name = ''; this.company_role = '';
    }

    ngOnInit(){
        var $validator = $('#wizardForm').validate({
            rules: {
                email: {
                    required: true,
                    email: true,
                    minlength: 5
                },
                role: {
                    required: true,
                    minlength: 4
                },
                company: {
                    required: true,
                    minlength: 5
                },
                company_address: {
                    required: true,
                    minlength: 8
                },
                code: {
                    required: true,
                    number: true
                },
                fax: {
                    number: true
                },
                tel: {
                    number: true
                },
                website: {
                    required: true,
                    minlength: 5,
                    url: true
                },
                framework: {
                    required: false,
                    minlength: 4
                },
                cities: {
                    required: true
                },
                price: {
                    number: true
                }
            }
        });
        // you can also use the nav-pills-[blue | azure | green | orange | red] for a different color of wizard
        $('#wizardCard').bootstrapWizard({
            tabClass: 'nav nav-pills',
            nextSelector: '.btn-next',
            previousSelector: '.btn-back',
            onNext: function(tab, navigation, index) {
                var $valid = $('#wizardForm').valid();

                if(!$valid) {
                    $validator.focusInvalid();
                    return false;
                }
            },
            onInit : function(tab, navigation, index){

                //check number of tabs and fill the entire row
                var $total = navigation.find('li').length;
                var $width = 100/$total;

                var $display_width = $(document).width();

                if($display_width < 600 && $total > 3){
                   $width = 50;
                }

                navigation.find('li').css('width',$width + '%');
            },
            onTabClick : function(tab, navigation, index){
                // Disable the posibility to click on tabs
                return false;
            },
            onTabShow: function(tab, navigation, index) {
                var $total = navigation.find('li').length;
                var $current = index+1;

                var wizard = navigation.closest('.card-wizard');

                // If it's the last tab then hide the last button and show the finish instead
                if($current >= $total) {
                    $(wizard).find('.btn-next').hide();
                    $(wizard).find('.btn-finish').show();
                } else if($current == 1){
                    $(wizard).find('.btn-back').hide();
                } else {
                    $(wizard).find('.btn-back').show();
                    $(wizard).find('.btn-next').show();
                    $(wizard).find('.btn-finish').hide();
                }
            }
        });
    }
}
