import { useStoreState } from "../../hooks/storeHooks";
import styled from "styled-components";

const ProfileContainer = styled.article`
  height: 80vh;
`;

const Profile = () => {
  const user = useStoreState((state) => state.user);

  return (
    <ProfileContainer>
      <h4>Firstname: {user.name.firstName}</h4>
      <h4>Lastname: {user.name.lastName}</h4>
    </ProfileContainer>
  );
};

export default Profile;
