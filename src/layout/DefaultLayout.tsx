import type { ReactNode } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  return <SafeAreaView style={styles.flexOne}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  flexOne: { flex: 1 },
});
