import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

// COMPONENTS
import {Modal} from '@components/integrated';
import {Image, Text} from '@components/atomic';

// STYLES
import {styles} from './userListItem.styles';
import {UserType} from 'types';

const UserListItem = ({
  item,
  isPlaceholder,
}: {
  item: UserType;
  isPlaceholder: boolean;
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return isPlaceholder ? (
    <View style={styles.placeholder}>
      <SkeletonPlaceholder borderRadius={4}>
        <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
          <SkeletonPlaceholder.Item width={60} height={60} borderRadius={50} />
          <SkeletonPlaceholder.Item marginLeft={20}>
            <SkeletonPlaceholder.Item width={120} height={20} />
            <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} />
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    </View>
  ) : (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      disabled={item?.isBlocked}>
      <Modal
        item={item}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />

      <View style={[styles.container, item?.isBlocked ? {opacity: 0.5} : null]}>
        {/* image */}
        <Image source={item.profile_image} />

        {/* name + reputation */}
        <View style={styles.userData}>
          <Text copy={item.display_name} bold />
          <Text copy={`Reputation:  ${item.reputation}`} size="sm" />
          <Text copy={item.isFollowed ? 'Following' : ''} size="sm" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UserListItem;
