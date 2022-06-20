import http from "../http-common";

class DonorAuthService{
    authDonor(data){
        return http.post("/donor_auth", data)
    }

}

export default new DonorAuthService();