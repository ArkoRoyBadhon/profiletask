import { useGetSingleProfileQuery } from "../app/redux/features/profile/profile";
import { useParams } from "react-router-dom";

const ProfileView = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleProfileQuery(id);

  if (isLoading) {
    return (
      <div className="flex h-[80vh] w-full justify-center items-center">
        Loading...
      </div>
    );
  }
  return (
    <div className="mx-5 md:max-w-screen-md xl:max-w-screen-xl md:mx-auto">
      <div className="w-full flex justify-center pb-10">
        <img src={data?.img} alt="img" className="w-64 h-60 rounded-sm" />
      </div>
      <div className="mt-10 px-5 py-5 rounded-sm shadow-md">
        <p className="">
          <b>Name:</b> {data?.name}{" "}
        </p>
        <p className="">
          <b>Email:</b> {data?.email}{" "}
        </p>
        <p className="">
          <b>Address:</b> {data?.address}{" "}
        </p>
        <p className="">
          <b>Gender:</b> {data?.gender}{" "}
        </p>
        <p className="">
          <b>Date Of Birth:</b> {data?.dateOfBirth}{" "}
        </p>
        <div className="">
          <p className="">
            <b>Skill:</b>
          </p>
          {data?.skill.map((item) => {
            return (
              <li key={item?._id} className="">
                {item.name}
              </li>
            );
          })}
        </div>
        <div className="">
          <p className="">
            <b>Education:</b>
          </p>
          {data?.education.map((item) => {
            return (
              <li key={item?._id} className="">
                <b>{item?.place}</b>
                <small className="ml-5">{`(Passing Year`}</small>: {item?.passingYear} {`)`}
              </li>
            );
          })}
        </div>
        <div className=""><b>About Me: </b>{data?.about}</div>
      </div>
    </div>
  );
};

export default ProfileView;
