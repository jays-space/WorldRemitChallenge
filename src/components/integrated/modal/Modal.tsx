import {View, Modal as RNModal} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';

// COMPONENTS
import {Image, Text} from '@components/atomic';
import {Button} from '@components/integrated';

// STYLES
import {styles} from './Modal.styles';
import {useUsersContext} from 'context';
import {UserType} from 'types';

interface IModal {
  item: UserType;
  modalVisible: boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
}

const Modal = ({item, modalVisible, setModalVisible}: IModal) => {
  const {setUsers} = useUsersContext();

  const followUser = () => {
    setUsers(users =>
      users.map(user => {
        if (user.account_id === item.account_id) {
          user.isFollowed = !user.isFollowed;
        }

        return user;
      }),
    );
    setModalVisible(false);
  };

  const blockUser = () => {
    setUsers(users =>
      users.map(user => {
        if (user.account_id === item.account_id) {
          user.isBlocked = !user.isBlocked;
          user.isFollowed = false;
        }

        return user;
      }),
    );
    setModalVisible(false);
  };

  return (
    <RNModal
      animationType="slide"
      visible={modalVisible}
      transparent={true}
      presentationStyle="overFullScreen"
      onRequestClose={() => setModalVisible(v => !v)}>
      <View style={styles.container}>
        {/* avatar */}
        <Image source={item?.profile_image} size="lg" />

        {/* username */}
        <Text copy={item.display_name} size="lg" bold />

        {/* follow + block btns */}
        <View style={styles.buttonContainer}>
          <Button
            label={item.isFollowed ? 'Followed' : 'Follow'}
            onPress={followUser}
          />

          <Button
            label={item.isBlocked ? 'Unblock' : 'Block'}
            onPress={blockUser}
          />
        </View>

        {/* hide modal btn */}
        <Button label="Close" onPress={() => setModalVisible(!modalVisible)} />
      </View>
    </RNModal>
  );
};

export default Modal;
