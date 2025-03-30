  import { View, Text, TouchableOpacity } from "react-native";
  import React, { useState } from "react";

  import CustomTextField from "./components/textfield";

  export default function App() {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [submittedName, setSubmittedName] = useState("");
    const [submittedCourse, setSubmittedCourse] = useState("");

    const handleTextChange = () => {
      setSubmittedName(name);
      setSubmittedCourse(course);
    };

    return (
      <View className="h-full">
        
        <View className="h-20 flex bg-black justify-center items-center">
          <View>
            <Text className='text-white'>
              By: Rafael D. Martinez
            </Text>
            <Text className='text-white text-2xl'>
              Simple Student Information
            </Text>
          </View>
        </View>

        <View className="flex mt-16 p-8">
 
          <View className=" gap-3">
            <CustomTextField
              field_name="Full Name"
              btn_placeholder="Ex. Joan D. Magpakayat"
              value={name}
              onChange={setName}
            />
            <CustomTextField
              field_name="Course"
              btn_placeholder="Ex. Bachelor of Science in Marine Transportation"
              value={course}
              onChange={setCourse}
            />
            <TouchableOpacity
              className="bg-black p-2 rounded-md"
              activeOpacity={0.8}
              onPress={handleTextChange}
            >
              <Text className="text-white text-xl text-center">Submit</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-3 p-2 mt-16">
            <Text className="text-center">
              Your name is{" "}
              {!submittedName ? (
                "__________"
              ) : (
                <Text className="font-semibold text-lg underline">{submittedName}</Text>
              )}{" "}
              and you are from{" "}
              {!submittedCourse ? (
                "__________"
              ) : (
                <Text className="font-semibold text-lg underline">{submittedCourse}</Text>
              )}
            </Text>
          </View>
        </View>

      </View>
    );
  }
