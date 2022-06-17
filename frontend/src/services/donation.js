import http from "../http-common";

class DonationDataService{
    createDon(data){
        return http.post("/donation", data)
    }

    getDon()
    {
        return http.get("/donation")
    }
}

export default new DonationDataService();