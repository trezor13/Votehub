import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function Vote() {
  const [voteCount, setVoteCount] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  const vote = () => {
    if (!hasVoted) {
      setVoteCount(voteCount + 1);
      setHasVoted(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.toptext}>Candidates</Text>
        <Image style={styles.logo} source={require('../assets/settings.png')} />
      </View>
      <ScrollView>
        <View style={styles.box}>
          <View style={styles.profile}>
            <View style={styles.ellipse} />
            <View style={styles.info}>
              <Text style={styles.text}>John Doe</Text>
              <Text style={styles.text}>ID: 1994 31434 12341234 1234</Text>
            </View>
          </View>
          <View style={styles.nomination}>
            <Text style={styles.text}>
              Empowering individuals through innovative solutions.
              Driving positive change with a relentless pursuit of excellence.
            </Text>
          </View>
          <View style={styles.end}>
            <View style={styles.gender}>
              <Text style={styles.text}>MALE</Text>
            </View>
            {hasVoted && <Text style={styles.text}>{voteCount}</Text>}
            <TouchableOpacity>
              <Button
                style={styles.button}
                title={hasVoted ? 'Voted' : 'Vote'}
                onPress={vote}
                disabled={hasVoted}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    fontSize: 24,
    marginTop: 80,
    marginLeft: 20,
  },
  toptext: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    width: 24,
    height: 24,
  },
  box: {
    width: '90%',
    backgroundColor: '#fff',
    marginLeft: 20,
    marginTop: 30,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 10,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipse: {
    width: 70,
    height: 70,
    borderRadius: 100,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  info: {
    marginLeft: 15,
  },
  nomination: {
    marginTop: 15,
  },
  end: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#223458',
    padding: 3,
    borderRadius: 16,
    height: 30,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
