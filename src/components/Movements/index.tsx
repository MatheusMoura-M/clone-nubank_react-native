import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { MotiView, AnimatePresence, MotiText } from "moti";

type PropsData = {
  id: number;
  label: string;
  value: string;
  date: string;
  type: number;
};

type PropsMovements = {
  data: PropsData;
};

export default function Movements({ data }: PropsMovements) {
  const [showValue, setShowValue] = useState<boolean>(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setShowValue(!showValue)}
    >
      <Text style={styles.date}>{data.date}</Text>

      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>

        {showValue ? (
          <AnimatePresence exitBeforeEnter>
            <MotiText
              style={data.type === 1 ? styles.value : styles.expenses}
              from={{ translateX: 100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ type: "spring", duration: 500 }}
            >
              R$ {data.type === 1 ? data.value : "-" + data.value}
            </MotiText>
          </AnimatePresence>
        ) : (
          <AnimatePresence exitBeforeEnter>
            <MotiView
              style={styles.skeleton}
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ type: "timing" }}
            ></MotiView>
          </AnimatePresence>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
    borderBottomWidth: 0.5,
    borderBottomColor: "#dadada",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 8,
  },
  date: {
    color: "#dadada",
    fontWeight: "bold",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    color: "#2ecc71",
    fontWeight: "bold",
    paddingEnd: 2,
  },
  expenses: {
    fontSize: 16,
    color: "#e74c3c",
    fontWeight: "bold",
    paddingEnd: 2,
  },
  skeleton: {
    marginTop: 6,
    width: 80,
    height: 10,
    backgroundColor: "#dadada",
    borderRadius: 8,
  },
});
