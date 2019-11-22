var connection = require('./../config');
var fastcsv=require('fast-csv');
const fs = require("fs");
module.exports.download=function(req,res){
    
    var id=req.query.id;
    connection.query('SELECT email FROM users where id = ?',[id], function (error, results, fields){
            if(error){
                res.json({
                    status:false,
                    message:'there are some error with query'
                    })
            }else{
                    if(results.length>0){
                       var query_string="select * from dummy";
                       connection.query(query_string,function(error,output){
                            if(error){
                                res.json({
                                    message:'wrong sql query'
                                })
                            }

                            else {
                                const ws = fs.createWriteStream("download1_fastcsv.csv"); 
                                const jsonData = JSON.parse(JSON.stringify(output));
                                const { parse } = require('json2csv');
                                const fields = ['id'];
                                const opts = { fields };
                                let csv ;
                                try {
                                  csv = parse(jsonData, opts);
                                } catch (err) {
                                  console.error(err);
                                }
                                fs.writeFileSync("./download1_fastcsv.csv",csv);
                            }
                       })
                    }
                    else{
                        json({
                            message:"no user present"
                        })
                    }
            }
    } );

}

