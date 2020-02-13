import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class DashboardComponent implements OnInit {
    userList = [];
    httpResponse = false;
    showRow = false;
    array = [];
    constructor(private userService: UserService) {

    }

    getList() {
        this.array = [
            {
                "position": 1,
                "name": "Hydrogen",
                "weight": 1.0079,
                "symbol": "H"
            },
            {
                "position": 2,
                "name": "Helium",
                "weight": 4.0026,
                "symbol": "He"
            },
            {
                "position": 3,
                "name": "Lithium",
                "weight": 6.941,
                "symbol": "Li"
            },
            {
                "position": 4,
                "name": "Beryllium",
                "weight": 9.0122,
                "symbol": "Be"
            },
            {
                "position": 5,
                "name": "Boron",
                "weight": 10.811,
                "symbol": "B"
            },
            {
                "position": 6,
                "name": "Carbon",
                "weight": 12.0107,
                "symbol": "C"
            },
            {
                "position": 7,
                "name": "Nitrogen",
                "weight": 14.0067,
                "symbol": "N"
            },
            {
                "position": 8,
                "name": "Oxygen",
                "weight": 15.9994,
                "symbol": "O"
            },
            {
                "position": 9,
                "name": "Fluorine",
                "weight": 18.9984,
                "symbol": "F"
            },
            {
                "position": 10,
                "name": "Neon",
                "weight": 20.1797,
                "symbol": "Ne"
            },
            {
                "position": 11,
                "name": "Sodium",
                "weight": 22.9897,
                "symbol": "Na"
            },
            {
                "position": 12,
                "name": "Magnesium",
                "weight": 24.305,
                "symbol": "Mg"
            },
            {
                "position": 13,
                "name": "Aluminum",
                "weight": 26.9815,
                "symbol": "Al"
            },
            {
                "position": 14,
                "name": "Silicon",
                "weight": 28.0855,
                "symbol": "Si"
            },
            {
                "position": 15,
                "name": "Phosphorus",
                "weight": 30.9738,
                "symbol": "P"
            },
            {
                "position": 16,
                "name": "Sulfur",
                "weight": 32.065,
                "symbol": "S"
            },
            {
                "position": 17,
                "name": "Chlorine",
                "weight": 35.453,
                "symbol": "Cl"
            },
            {
                "position": 18,
                "name": "Argon",
                "weight": 39.948,
                "symbol": "Ar"
            },
            {
                "position": 19,
                "name": "Potassium",
                "weight": 39.0983,
                "symbol": "K"
            },
            {
                "position": 20,
                "name": "Calcium",
                "weight": 40.078,
                "symbol": "Ca"
            }
        ];
    }

    ngOnInit() {
        // this.getAllUsers();
        // const obj = {
        //     "Patient": {
        //         "OfficeNumber": "1055",
        //         "AccountNumber": "BW00016919",
        //         "LastName": "SMITH",
        //         "FirstName": "SALLY",
        //         "Gender": "F",
        //         "DOB": "01/01/1900",
        //         "ContactDetail": {
        //             "AddressLine1": "123 ABC St, #100",
        //             "City": "Dallas",
        //             "State": "TX",
        //             "ZipCode": "75010",
        //             "PhoneNumber": "9725551111"
        //         },
        //         "Coverage": {
        //             "Primary": {
        //                 "Payer": {
        //                     "CompanyName": "MEDICARE",
        //                     "PayerId": "00303",
        //                     "ContactDetail": {
        //                         "AddressLine1": "123 ABC St, #100",
        //                         "City": "Dallas",
        //                         "State": "TX",
        //                         "ZipCode": "75010",
        //                         "PhoneNumber": "9725551111"
        //                     }
        //                 },
        //                 "PolicyNumber": "A4324234234",
        //                 "GroupNumber": "R809"
        //             },
        //             "Secondary": {
        //                 "Payer": {
        //                     "CompanyName": "TRICARE STANDARD",
        //                     "PayerId": "SK102",
        //                     "ContactDetail": {
        //                         "AddressLine1": "123 ABC St, #100",
        //                         "City": "Dallas",
        //                         "State": "TX",
        //                         "ZipCode": "75010",
        //                         "PhoneNumber": "9725551111"
        //                     }
        //                 },
        //                 "PolicyNumber": "A4324234234",
        //                 "GroupNumber": "R809"
        //             }
        //         }
        //     },
        //     "Claim": {
        //         "VisitNumber": "2323123",
        //         "ClaimNumber": "4987824",
        //         "DateOfService": "9/17/2019",
        //         "TotalCharge": "150.00",
        //         "VisitBalance": "150.00",
        //         "ClaimDate": "10/2/2019",
        //         "InsuranceType": "Secondary",
        //         "ClaimType": "Institutional",
        //         "POS": "11",
        //         "BillableProvider": {
        //             "Name": "WANG, JAMES",
        //             "NPI": "1234567893"
        //         },
        //         "Institutional": {
        //             "BillClassification": "863",
        //             "AdmissionType": "9",
        //             "AdmissionSource": "9"
        //         }
        //     },
        //     "EOB": {
        //         "Payer": {
        //             "CompanyName": "TRICARE STANDARD",
        //             "ContactDetail": {
        //                 "AddressLine1": "123 ABC St, #100",
        //                 "City": "Dallas",
        //                 "State": "TX",
        //                 "ZipCode": "75010",
        //                 "PhoneNumber": "9725551111"
        //             }
        //         },
        //         "EOBNumber": "423424234",
        //         "EOBDate": "11/5/2019",
        //         "CheckNumber": "EC12345",
        //         "ICN": "99099904434",
        //         "Denial": [
        //             {
        //                 "Id": "123",
        //                 "CPT": "81002",
        //                 "DxCode": "N39.0",
        //                 "DenialCode": "CO",
        //                 "DenialReason": "22",
        //                 "AdviseRemark": "N140",
        //                 "Quantity": "1",
        //                 "LineChargeAmount": "100.00"
        //             },
        //             {
        //                 "Id": "456",
        //                 "CPT": "99214",
        //                 "DxCode": "R11.2",
        //                 "DenialCode": "CO",
        //                 "DenialReason": "22",
        //                 "AdviseRemark": "N130",
        //                 "Quantity": "1",
        //                 "LineChargeAmount": "50.00"
        //             }
        //         ]
        //     }
        // }
        // this.addClaimList(100, obj);

    }
    getAllUsers() {
        // this.httpResponse = true;
        // this.userService.getAllUsers().subscribe((response: any) => {
        //     console.log('response : ', response);
        //     this.userList = response;
        //     this.httpResponse = false;
        // }, (error) => {
        //     console.log('error : ', error);
        //     this.httpResponse = false;
        // })
    }
    showMe() {
        this.showRow = !this.showRow;
        console.log('showMe : ', this.showRow);

    }

    addClaimList(number, defaultObj) {
        // const defaultArray = [];
        // for (var index = 0; index < number; index++) {
        //     defaultObj.id = index + 1;
        //     defaultObj.Claim.VisitNumber = index + 1;
        //     // console.log('defaultObj : ', defaultObj);
        //     this.addClaim(defaultObj);
        //     // defaultArray.push(JSON.parse(JSON.stringify(defaultObj)));
        // }
        // console.log('defaultArray : ', JSON.stringify(defaultArray));

    }

    addClaim(claim) {
        // this.userService.addClaim(claim).subscribe((response) => {
        //     console.log('addClaim : ', response);
        // }, (error) => {
        //     console.log('error : ', error);
        // });
    }
}
