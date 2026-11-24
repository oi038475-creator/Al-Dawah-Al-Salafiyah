
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
  StatusBar,
  Linking,
} from "react-native";

const BLUE = "#0A4DA1";
const LIGHT = "#F2F6FC";

const sections = [
  { id: "books", title: "المكتبة الإسلامية", icon: "📚" },
  { id: "audio", title: "المحاضرات الصوتية", icon: "🎧" },
  { id: "tv", title: "قناة TILAWA TV ZARMA", icon: "📺" },
  { id: "prayer", title: "مواقيت الصلاة", icon: "🕌" },
  { id: "settings", title: "الإعدادات", icon: "⚙️" },
];

const books = [
  "الدعوة السلفية حقيقتها ومميزاتها",
  "علامات الساعة",
  "ابن صياد والمسيح الدجال",
];

const audios = [
  "الدورة العلمية في كوتونو - التسجيل الأول",
  "الدورة العلمية في كوتونو - التسجيل الثاني",
  "أشراط الساعة - تقديم أبي يحيى أسكندر يحيى ميغا",
  "قصة صافي بن صياد - تقديم أسكندر يحيى ميغا",
];

export default function App() {
  const [page, setPage] = useState("home");
  const [dark, setDark] = useState(false);

  const bg = dark ? "#101827" : LIGHT;
  const card = dark ? "#1E293B" : "#FFFFFF";
  const color = dark ? "#FFFFFF" : "#17365D";

  const title =
    sections.find((item) => item.id === page)?.title || "الرئيسية";

  const renderList = (items) =>
    items.map((item, index) => (
      <View key={index} style={[styles.item, { backgroundColor: card }]}>
        <Text style={styles.number}>{index + 1}</Text>
        <Text style={[styles.itemText, { color }]}>{item}</Text>
      </View>
    ));

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: bg }]}>
      <StatusBar backgroundColor={BLUE} barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.logo}>TILAWA TV ZARMA</Text>
        <Text style={styles.subtitle}>منصة العلم والدعوة</Text>
      </View>

      {page !== "home" && (
        <Pressable style={styles.back} onPress={() => setPage("home")}>
          <Text style={styles.backText}>‹  الرئيسية</Text>
        </Pressable>
      )}

      <ScrollView contentContainerStyle={styles.content}>
        {page === "home" ? (
          <>
            <View style={[styles.welcome, { backgroundColor: card }]}>
              <Text style={[styles.welcomeTitle, { color }]}>
                مرحباً بكم في
              </Text>
              <Text style={styles.brand}>TILAWA TV ZARMA</Text>
              <Text style={[styles.description, { color }]}>
                مكتبة إسلامية للدروس والمحاضرات والكتب النافعة
              </Text>
            </View>

            {sections.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.section, { backgroundColor: card }]}
                onPress={() => setPage(item.id)}
              >
                <Text style={styles.icon}>{item.icon}</Text>
                <Text style={[styles.sectionText, { color }]}>
                  {item.title}
                </Text>
                <Text style={styles.arrow}>‹</Text>
              </Pressable>
            ))}
          </>
        ) : (
          <>
            <Text style={[styles.pageTitle, { color }]}>{title}</Text>

            {page === "books" && renderList(books)}

            {page === "audio" && (
              <>
                {renderList(audios)}
                <Text style={[styles.note, { color }]}>
                  سيتم ربط الملفات الصوتية وتشغيلها داخل التطبيق في المرحلة القادمة.
                </Text>
              </>
            )}
{page === "tv" && (
  <View style={[styles.infoCard, { backgroundColor: card }]}>
    <Text style={styles.tvIcon}>📺</Text>

    <Text style={[styles.infoTitle, { color }]}>
      TILAWA TV ZARMA
    </Text>

    <Text style={[styles.description, { color }]}>
      القناة الرسمية للدروس والمحاضرات العلمية
    </Text>
    <Text style={[styles.description, { color }]}>
      استمع إلى الدروس والمواعظ باللغة الزرما،
      وتابع جديد المحاضرات العلمية.
    </Text>

    <Pressable
      style={styles.button}
      onPress={() =>
        Linking.openURL("https://www.youtube.com/@tilawatvzarma")
      }
    >
      <Text style={styles.buttonText}>
        مشاهدة قناة TILAWA TV ZARMA
      </Text>
    </Pressable>
  </View>
)}
            {page === "prayer" && (
              <View style={[styles.info, { backgroundColor: card }]}>
                <Text style={styles.tvIcon}>🕌</Text>
                <Text style={[styles.infoTitle, { color }]}>
                  مواقيت الصلاة
                </Text>
                <Text style={[styles.description, { color }]}>
                  سيتم إعداد مواقيت الصلاة حسب المدينة في المرحلة القادمة.
                </Text>
              </View>
            )}

            {page === "settings" && (
              <Pressable
                style={[styles.item, { backgroundColor: card }]}
                onPress={() => setDark(!dark)}
              >
                <Text style={[styles.itemText, { color }]}>
                  {dark ? "☀️ تفعيل الوضع النهاري" : "🌙 تفعيل الوضع الليلي"}
                </Text>
              </Pressable>
            )}
          </>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>TILAWA TV ZARMA</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    backgroundColor: BLUE,
    padding: 24,
    alignItems: "center",
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: { color: "#DCE9F8", marginTop: 8, fontSize: 14 },
  content: { padding: 16, paddingBottom: 30 },
  welcome: {
    padding: 22,
    borderRadius: 16,
    marginBottom: 18,
    alignItems: "center",
  },
  welcomeTitle: { fontSize: 19, fontWeight: "bold" },
  brand: {
    color: BLUE,
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
    lineHeight: 25,
  },
  section: {
    padding: 18,
    borderRadius: 13,
    marginBottom: 12,
    flexDirection: "row-reverse",
    alignItems: "center",
    elevation: 2,
  },
  icon: { fontSize: 25, marginLeft: 14 },
  sectionText: { flex: 1, fontSize: 16, fontWeight: "bold", textAlign: "right" },
  arrow: { fontSize: 25, color: BLUE },
  back: { padding: 14, alignItems: "flex-end" },
  backText: { color: BLUE, fontSize: 16, fontWeight: "bold" },
  pageTitle: {
    fontSize: 21,
    fontWeight: "bold",
    textAlign: "right",
    marginBottom: 18,
  },
  item: {
    padding: 17,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  number: { color: BLUE, fontWeight: "bold", fontSize: 17, marginLeft: 12 },
  itemText: { flex: 1, fontSize: 15, textAlign: "right", lineHeight: 25 },
  info: { padding: 22, borderRadius: 15, alignItems: "center" },
  tvIcon: { fontSize: 42, marginBottom: 12 },
  infoTitle: { fontSize: 21, fontWeight: "bold", marginBottom: 12 },
  button: {
    backgroundColor: BLUE,
    paddingVertical: 13,
    paddingHorizontal: 28,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  note: { textAlign: "right", marginTop: 12, lineHeight: 25 },
  footer: {
    backgroundColor: BLUE,
    padding: 12,
    alignItems: "center",
  },
  footerText: { color: "#FFFFFF", fontWeight: "bold" },
});
