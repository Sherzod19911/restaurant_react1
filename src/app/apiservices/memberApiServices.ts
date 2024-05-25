import { serverApi } from "../../lib/config";
import assert from "assert";
import axios from "axios";
import { Definer } from "../../lib/Definer";
import { Member } from "../../types/user";
import { MemberLiken } from "../../types/others";
class MemberApiService {
   // logOutRequest() {
  //   throw new Error('Method not implemented.');
  // }

    private readonly path: string;

  constructor () {
    this.path = serverApi;
  };


  public async signupRequest(signup_data: any) {
    try {
      const result = await axios.post(this.path + "/signup", signup_data, {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      console.log("state: ", result.data.state);
      console.log( "state","success")

      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);
      throw err;
    }
  }


  public async loginRequest(login_data: any) {
    try {
      const result = await axios.post(
        this.path + "/login",
        login_data,
        { withCredentials: true }
      );

      console.log("state::", result.data.state);
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state !== 'fail', result?.data?.message); // Checking state
      const member: Member = result.data.data;
      localStorage.setItem("member_data", JSON.stringify(member));   //member objectni jasonga uzgartirib saqlagin
      return member;
    } catch (err: any) {
      console.log(`ERROR ::: loginRequest ${err.message}`);
      throw err;
    }
  }
  public async logOutRequest() {
    try {
      const result = await axios.get(this.path+"/logout", {
        withCredentials: true,
      });

      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != "fail", result?.data?.message);
      localStorage.removeItem("member_data");
      console.log("state:", result.data.state);

      const logout_result = result.data.state;     
      return logout_result == "success";    
    } catch (err: any) {
      console.log(`ERROR ::: logOutRequest ${err.message}`);
      throw err;
    }
  }

  public async memberLikeTarget(data: any) {
    try {
      const url = "/member-liken",
      result = await axios.post(this.path+url, data, { 
        withCredentials: true
      });
      assert.ok(result?.data, Definer.general_err1);
      assert.ok(result?.data?.state != 'fail', result?.data?.message);
      console.log('state:', result.data.data);
       const like_result: MemberLiken = result.data.data;
       return like_result;
       console.log("loke_result::", like_result)

    }catch(err: any)  {
      console.log(`ERROR ::: memberLikeTarget ${err.message}`);
      throw err;
    }
   }
}
export default MemberApiService;