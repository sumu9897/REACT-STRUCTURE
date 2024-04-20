import {useEffect, useState} from 'react';
import axios from "axios";


const ReadPage = () => {
    const [ProductData, SetProductData] = useState([]);
    const [refresh, setRefresh] = useState(0);

    //useEffect
    useEffect(() => {
        CallReadAPI()

    }, []);

    const CallReadAPI=async ()=>{
       let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");
       console.log(res);
       let ProductList=res.data['data'];
       SetProductData(ProductList)

    }

    const onDeleteClick = async (id)=>{
        let res = await axios.get(`https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`);
        let deleteData=res.data['status'];
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Product List</h1>
                    <button onClick={()=>setRefresh(refresh+1)} className="btn btn-secondary">Refresh</button>
                    <hr/>
                    {/*{JSON.stringify(ProductData)}*/}
                    <table className="table table-striped">
                        <tbody>
                        {
                            ProductData.length>0 &&
                            ProductData.map((item,i)=>{
                                return(
                                    <tr>
                                        <td>{item['_id']}</td>
                                        <td>{item['ProductName']}</td>
                                        <td>{item['ProductCode']}</td>
                                        <td><img style={{width:'50px',height:'auto'}} src={item['Img']}/></td>
                                        <td>{item['UnitPrice']}</td>
                                        <td>{item['Qty']}</td>
                                        <td>{item['TotalPrice']}</td>
                                        <td>{item['CreatedDate']}</td>
                                        <button onDeleteClick={()=>onDeleteClick(item['_id'])} className="btn btn-danger">Delete</button>

                                    </tr>

                            )
                        })
                        }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ReadPage;