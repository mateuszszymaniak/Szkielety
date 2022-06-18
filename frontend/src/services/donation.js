import http from "../http-common";

class DonationDataService{
    createDon(data){
        return http.post("/donation", data)
    }

    getDon()
    {
        return http.get("/donation")
    }
    getDonById(did = null) {
        return http.get(`/donation?did=${did}`);
      }
      getDonByBBId(bbid = null) {
        return http.get(`/donation?bbid=${bbid}`);
      }
      deleteD(id)
      {
        return http.delete(`/donation`, {data: {donid: id}})
      }
}

export default new DonationDataService();