import SwiftUI
import ComposeApp

/// Hosts the shared Compose UI. `MainViewController()` is the Kotlin
/// entry point exported by the `ComposeApp` framework.
struct ComposeView: UIViewControllerRepresentable {
    func makeUIViewController(context: Context) -> UIViewController {
        MainViewControllerKt.MainViewController()
    }

    func updateUIViewController(_ uiViewController: UIViewController, context: Context) {}
}

struct ContentView: View {
    var body: some View {
        // Compose handles the keyboard itself; letting SwiftUI also apply
        // its avoidance produces a double inset.
        ComposeView().ignoresSafeArea(.keyboard)
    }
}
