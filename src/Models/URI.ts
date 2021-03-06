﻿//------------------------------------------------------------------------------
//----- URI ---------------------------------------------------------------
//------------------------------------------------------------------------------

//-------1---------2---------3---------4---------5---------6---------7---------8
//       01234567890123456789012345678901234567890123456789012345678901234567890
//-------+---------+---------+---------+---------+---------+---------+---------+

// copyright:   2015 WiM - USGS

//    authors:  Jeremy K. Newson USGS Wisconsin Internet Mapping
//             
// 
//   purpose:  
//          
//discussion:
//

//Comments
//08.20.2014 jkn - Created


//Imports"
// Interface
module SiGL.Models {
    export interface IURI {
        uri: string;
        id: string;
        description: string;
        parameters: Array<Models.IURIParameter>;
        availableMedia: string;
        selectedMedia: string;
        newURL: string;
        showMap: boolean;
    }

    export class URI implements IURI {
        //properties
        public uri: string;
        public id: string;
        public description: string;
        public parameters: Array<Models.IURIParameter>;
        public availableMedia: string;
        public selectedMedia: string;
        public newURL: string;
        public showMap: boolean;

        constructor(u: string) {
            this.uri = u;
            this.parameters = [];
            this.showMap = false;
        }

    }//end class
}//end module   