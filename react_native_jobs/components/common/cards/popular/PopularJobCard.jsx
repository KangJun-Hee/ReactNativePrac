import { View, Text, TouchableOpacity, Image } from "react-native";

// import styles from "./popularjobcard.style";
// import { checkImageURL } from "../../../../utils";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity >
        <p>하하하</p>
      </TouchableOpacity>
      <Text >
        {item.employer_name}
      </Text>

      <View >
        <Text >
          {item.job_title}
        </Text>
        <View >
          <Text >
            {item?.job_publisher} -
          </Text>
          <Text > {item.job_country}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
