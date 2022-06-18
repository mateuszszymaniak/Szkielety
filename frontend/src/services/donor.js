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
}

export default new DonorDataService();