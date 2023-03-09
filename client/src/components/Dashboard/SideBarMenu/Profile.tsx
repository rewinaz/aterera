import * as Avatar from "@radix-ui/react-avatar";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="flex mb-4">
      <Avatar.Root className=" inline-flex items-center justify-center overflow-hidden select-none w-10 h-10 rounded-full bg-white">
        <Avatar.Image
          className="w-full h-full object-cover rounded-full"
          src="../../../../public/vite.svg"
          alt="User"
        />

        <Avatar.Fallback className=" w-full h-full flex items-center justify-center bg-white text-sm font-medium">
          User profile
        </Avatar.Fallback>
      </Avatar.Root>

      <div className=" ml-4">
        <p className=" text-white font-bold">Thomas Williams</p>
        <small className=" text-gray-600 text-base">Personal</small>
      </div>
    </div>
  );
};

export default Profile;
