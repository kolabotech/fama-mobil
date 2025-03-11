import Text from '../../components/Text'
import { View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
// import { Bell, Calendar, Home, MessageSquare, User } from 'lucide-react';

const ServiceButton = ({ icon, label }) => (
  <TouchableOpacity className="items-center justify-center w-1/3 py-4">
    <View className="items-center justify-center w-12 h-12 mb-2">
      <Image source={icon} className="w-8 h-8" resizeMode="contain" />
    </View>
    <Text className="text-center text-blue-900 font-medium">{label}</Text>
  </TouchableOpacity>
);

// Composant pour les départements
const DepartmentCard = ({ icon, title, count }) => (
  <TouchableOpacity className="w-1/3 p-2">
    <View className="items-center bg-white rounded-xl p-4 shadow">
      <Image source={icon} className="w-16 h-16 mb-2" />
      <Text className="text-center text-blue-900 font-medium">{title}</Text>
      <Text className="text-center text-gray-400 text-xs">{count} Doctors</Text>
    </View>
  </TouchableOpacity>
);

// Composant pour l'en-tête de section
const SectionHeader = ({ title }) => (
  <View className="flex-row justify-between items-center mt-6 mb-4">
    <Text className="text-xl font-bold text-blue-900">{title}</Text>
    <TouchableOpacity>
      <Text className="text-blue-500">View all &gt;</Text>
    </TouchableOpacity>
  </View>
);

const index = () => {

  const icons = {
    clinic: require('../../assets/images/icon.png'),
    home: require('../../assets/images/icon.png'),
    video: require('../../assets/images/icon.png'),
    pharmacy: require('../../assets/images/icon.png'),
    diseases: require('../../assets/images/icon.png'),
    covid: require('../../assets/images/icon.png'),
    generalCare: require('../../assets/images/icon.png'),
    pediatrics: require('../../assets/images/icon.png'),
    cardiology: require('../../assets/images/icon.png'),
    hospital1: require('../../assets/images/icon.png'),
    hospital2: require('../../assets/images/icon.png'),
  };


  return (
    <SafeAreaView className="flex-1 relative">
      <StatusBar style="light" />
      <View className='inset-0 absolute bg-blue-600 rounded-b-[30] ' style={{ height: hp('30%') }} />
      {/* Header Section */}
      <View className="flex-row justify-between items-center mt-10 px-4 py-2">
        <View className="flex-row items-center">
          <Image
            source={require('../../assets/images/icon.png')}
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <View className="ml-3">
            <Text className="text-white">Hi Kaixa,</Text>
            <Text className='text-white'>Welcome back!</Text>
          </View>
        </View>

        <View className="flex-row">
          <TouchableOpacity className="mr-4">
            <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
              <Image source={require('../../assets/images/icon.png')} className="w-5 h-5" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="w-10 h-10 bg-blue-500 rounded-full items-center justify-center">
              <Image source={require('../../assets/images/icon.png')} className="w-5 h-5" />
              <View className="absolute -top-1 -right-1 bg-red-500 w-5 h-5 rounded-full items-center justify-center">
                <Text className="text-white text-xs font-bold">2</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-1  pt-4">

        <View className="bg-white mx-4 rounded-xl ">
          <View className="flex-row flex-wrap">
            <ServiceButton icon={icons.clinic} label="Clinic Visit" />
            <ServiceButton icon={icons.home} label="Home Visit" />
            <ServiceButton icon={icons.video} label="Video Consult" />
          </View>

          <View className="flex-row flex-wrap border-t border-gray-100">
            <ServiceButton icon={icons.pharmacy} label="Pharmacy" />
            <ServiceButton icon={icons.diseases} label="Diseases" />
            <ServiceButton icon={icons.covid} label="Covid-19" />
          </View>
        </View>


        <View className="px-4">
          <SectionHeader title="Departments" />

          <View className="flex-row flex-wrap">
            <DepartmentCard
              icon={icons.generalCare}
              title="General Care"
              count="647"
            />
            <DepartmentCard
              icon={icons.pediatrics}
              title="Pediatrics"
              count="324"
            />
            <DepartmentCard
              icon={icons.cardiology}
              title="Cardiology"
              count="647"
            />
          </View>
        </View>


        <View className="px-4 mb-20">
          <SectionHeader title="Top Hospital" />

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableOpacity className="mr-4">
              <Image
                source={icons.hospital1}
                className="w-64 h-40 rounded-xl"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.hospital2}
                className="w-64 h-40 rounded-xl"
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <ScrollView className="flex-1  pt-4">


      </ScrollView>

    </SafeAreaView>
  )
}

export default index