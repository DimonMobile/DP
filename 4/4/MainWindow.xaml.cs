using _4.Crypt;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace _4
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private Crypter m_activeCrypter;

        private void RadioButton_Checked(object sender, RoutedEventArgs e)
        {
            m_activeCrypter = new RatioCrypter();
        }

        private void RadioButton_Checked_1(object sender, RoutedEventArgs e)
        {
            m_activeCrypter = new TrisemusCrypter();
        }

        private void Button_Click(object sender, RoutedEventArgs e)
        {
            ResultTextBox.Text = m_activeCrypter.encrypt(SourceTextBox.Text);
        }

        private void Button_Click_1(object sender, RoutedEventArgs e)
        {
            SourceTextBox.Text = m_activeCrypter.decrypt(ResultTextBox.Text);
        }
    }
}
