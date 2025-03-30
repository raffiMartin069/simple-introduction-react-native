import { View, Text, TextInput } from "react-native";

type Props = {
  field_name: string;
  btn_placeholder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
};

const CustomTextField = (props: Props) => {
  return (
    <View>
      <Text className="text-xl font-semibold">{props.field_name}</Text>
      <TextInput
        className="border-2 border-slate-100"
        placeholder={props.btn_placeholder}
        value={props.value}
        onChangeText={props.onChange}
      />
    </View>
  );
};

export default CustomTextField;
