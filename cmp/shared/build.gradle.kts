import org.jetbrains.kotlin.gradle.ExperimentalKotlinGradlePluginApi
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
    alias(libs.plugins.kotlinMultiplatform)
    alias(libs.plugins.kotlinSerialization)
    alias(libs.plugins.androidLibrary)
}

kotlin {
    androidTarget {
        @OptIn(ExperimentalKotlinGradlePluginApi::class)
        compilerOptions { jvmTarget.set(JvmTarget.JVM_17) }
    }

    jvm("desktop") {
        @OptIn(ExperimentalKotlinGradlePluginApi::class)
        compilerOptions { jvmTarget.set(JvmTarget.JVM_17) }
    }

    // No iosX64: Compose Multiplatform 1.11.x publishes no Intel-simulator
    // variant, so the app module cannot resolve it and a shared target with
    // no app target on top would be dead weight. Apple Silicon simulators
    // use iosSimulatorArm64.
    listOf(iosArm64(), iosSimulatorArm64()).forEach { iosTarget: KotlinNativeTarget ->
        iosTarget.binaries.framework {
            baseName = "Shared"
            isStatic = true
        }
    }

    sourceSets {
        commonMain.dependencies {
            implementation(libs.kotlinx.coroutines.core)
            implementation(libs.kotlinx.serialization.json)
            api(libs.kotlinx.datetime)

            // `api` rather than `implementation`: the repository
            // implementations surface FirebaseUser and the Firebase
            // exception types to callers that need to distinguish a
            // permission denial from a network failure.
            api(libs.firebase.auth)
            api(libs.firebase.firestore)
            // `api` for the same reason as auth and firestore:
            // BarBackerFirebase exposes the FirebaseStorage instance, and
            // callers need to catch FirebaseStorageException to tell a
            // rejected upload apart from a dropped connection.
            api(libs.firebase.storage)
            implementation(libs.firebase.functions)
            implementation(libs.firebase.messaging)

            implementation(libs.ktor.client.core)
            implementation(libs.ktor.client.content.negotiation)
            implementation(libs.ktor.serialization.kotlinx.json)
        }
        commonTest.dependencies {
            implementation(kotlin("test"))
            implementation(libs.kotlinx.coroutines.test)
        }

        androidMain.dependencies {
            implementation(libs.ktor.client.okhttp)
        }

        val desktopMain by getting
        desktopMain.dependencies {
            implementation(libs.ktor.client.cio)
        }

        iosMain.dependencies {
            implementation(libs.ktor.client.darwin)
        }
    }
}

android {
    namespace = "com.hereliesaz.barbacker.shared"
    compileSdk = libs.versions.androidCompileSdk.get().toInt()
    defaultConfig {
        minSdk = libs.versions.androidMinSdk.get().toInt()
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
}
