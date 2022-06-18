import http from "../http-common";

class DonorDataService{
    createD(data){
        return http.post("/donors", data)
    }

    getD()
    {   
        return http.get(`/donors`);
    }

    getDByEmail(email) {
        return http.get(`/donors?email=${email}`);
      }
    
    deleteD(id)
    {
        return http.delete(`/donors`, {data: {donorId: id}})
    }
}

export default new DonorDataService();