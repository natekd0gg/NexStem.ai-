import { Avatar, AvatarImage } from "./ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="../app/public/icon.png"></AvatarImage>
    </Avatar>
  );
};

export default BotAvatar;
