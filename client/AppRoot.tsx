import React, { useState, useEffect } from "react";
import UserIcon from "./components/UserIcon";
import UserBadgeDropdown from "./components/UserBadgeDropdown";
import MapsContainer from "./containers/MapsContainer";
import TripDetailsForm from "./components/TripDetailsForm/TripDetailsForm";
import NewUserPopup from "./components/NewUserPopup";
import UserUnknown from "./components/UserUnknown";
import { GetAllCCType } from "../types";

let hasRun = false;

interface UserInfoPayload {
  countrycodes: string[] | null | undefined;
  // eslint-disable-next-line camelcase
  facebook_id: string;
  username: string;
  id: string;
}

const App = () => {
  const [currentSel, setCurrentSel] = useState("");
  const [visited, setVisited] = useState<string[]>([]);
  const [currentUser, setCurrentUser] = useState<string>("");
  const [showPopUp, setShowPopUp] = useState<boolean>(true);
  const [currentUserID, setCurrentUserID] = useState("");
  const [userIsUnknown, setUserUnknown] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (hasRun) return;
    hasRun = true;
    fetch("/user/auth")
      .then((res) => {
        if (!res.ok) throw new Error("Server Error");
        return res;
      })
      .then((res) => res.json())
      .then((userInfo: UserInfoPayload) => {
        setUserUnknown(false);
        setVisited(userInfo.countrycodes || []);
        setCurrentUserID(userInfo.id);
        setCurrentUser(userInfo.username);
      })
      .catch(() => {
        console.log("who are you");
        setUserUnknown(true);
      });
  });

  return (
    <>
      {showPopUp ? <NewUserPopup setShowPopUp={setShowPopUp} /> : null}
      <UserUnknown open={userIsUnknown} />
      <UserIcon
        setCurrentUser={setCurrentUser}
        setCurrentUserID={setCurrentUserID}
        currentUser={currentUser}
        setVisited={setVisited}
        visited={visited}
      />
      <UserBadgeDropdown
        visited={visited}
        currentUser={currentUser}
        currentUserID={currentUserID}
      />
      {currentSel && showForm ? (
        <TripDetailsForm
          setShowForm={setShowForm}
          currentUserID={currentUserID}
          currentSel={currentSel}
          currentUser={currentUser}
        />
      ) : null}
      <MapsContainer
        visited={visited}
        setVisited={setVisited}
        currentUser={currentUser}
        // setCurrentSel={setCurrentSel}
        setShowForm={setShowForm}
      />
    </>
  );
};

export default App;
