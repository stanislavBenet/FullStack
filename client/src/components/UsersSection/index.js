import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CONSTANT from "../../CONSTANTS";
import { getAllUsers } from "../../store/usersSlice";
import styles from "./userSection.module.scss";

const UsersSection = (props) => {
  const [amount, setAmount] = useState(CONSTANT.MIN_LIMIT);
  const { users, error, isFetching } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers({ offset: 0, limit: amount }));
  }, [amount, dispatch]);
  return (
    <section>
      <h2>Users List</h2>
      <p>
        {CONSTANT.AMOUNTS.map((item, i) => (
          <button
            className={styles.btn}
            key={i}
            onClick={() => {
              setAmount(item);
            }}
          >
            {item}
          </button>
        ))}
      </p>
      {error && <h3>ERROR!!!</h3>}
      {isFetching && <h3>Loading...</h3>}
      {users.map((user, i) => (
        <article key={user.id}>{user.firstName}</article>
      ))}
      {/* <button
        onClick={dispatch(getAllUsers({ offset: users.length, limit: amount }))}
      >
        more
      </button> */}
    </section>
  );
};

export default UsersSection;
